"use client";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
} from "react";
import {
  cartReducer,
  sanitizeCart,
  type CartItem,
  type CartAction,
} from "../lib/cart";
const CartContext = createContext<{
  items: CartItem[];
  dispatch: Dispatch<CartAction>;
  ready: boolean;
}>({ items: [], dispatch: () => {}, ready: false });
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      dispatch({
        type: "restore",
        items: sanitizeCart(
          JSON.parse(sessionStorage.getItem("ton-form-cart") || "[]"),
        ),
      });
    } catch {
      /* Storage may be unavailable; the in-memory cart remains functional. */
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready)
      try {
        if (items.length)
          sessionStorage.setItem("ton-form-cart", JSON.stringify(items));
        else sessionStorage.removeItem("ton-form-cart");
      } catch {
        /* No persistence required to browse the demo. */
      }
  }, [items, ready]);
  return (
    <CartContext.Provider value={{ items, dispatch, ready }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
