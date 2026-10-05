// Adapted and hardened from GreatStackDev/gocart/lib/features/cart/cartSlice.js (MIT).
import { findVariant } from "../data/products";
export interface CartItem {
  sku: string;
  quantity: number;
}
export type CartAction =
  | { type: "add"; sku: string }
  | { type: "quantity"; sku: string; quantity: number }
  | { type: "remove"; sku: string }
  | { type: "clear" }
  | { type: "restore"; items: CartItem[] };
export function sanitizeCart(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  const merged = new Map<string, number>();
  for (const item of value) {
    if (
      item &&
      typeof item === "object" &&
      typeof item.sku === "string" &&
      findVariant(item.sku) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    )
      merged.set(
        item.sku,
        Math.min(12, (merged.get(item.sku) || 0) + item.quantity),
      );
  }
  return [...merged].map(([sku, quantity]) => ({ sku, quantity }));
}
export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "restore":
      return sanitizeCart(action.items);
    case "clear":
      return [];
    case "remove":
      return state.filter((i) => i.sku !== action.sku);
    case "add":
      if (!findVariant(action.sku)) return state;
      return sanitizeCart([...state, { sku: action.sku, quantity: 1 }]);
    case "quantity":
      if (
        !Number.isInteger(action.quantity) ||
        action.quantity < 1 ||
        action.quantity > 12
      )
        return state;
      return state.map((i) =>
        i.sku === action.sku ? { ...i, quantity: action.quantity } : i,
      );
  }
}
export const subtotal = (items: CartItem[]) =>
  items.reduce(
    (sum, item) =>
      sum + (findVariant(item.sku)?.variant.price || 0) * item.quantity,
    0,
  );
export const shipping = (total: number, country = "DE") =>
  total === 0
    ? 0
    : country === "AT"
      ? total >= 12000
        ? 0
        : 790
      : total >= 8000
        ? 0
        : 490;
