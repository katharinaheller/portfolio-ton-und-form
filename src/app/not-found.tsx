import {href} from '../lib/site';
export default function NotFound(){return <section className="page-intro"><p className="eyebrow">404</p><h1>Dieses Stück<br/>fehlt uns noch.</h1><p>Die angefragte Seite wurde nicht gefunden.</p><a className="button" href={href('kollektion/')}>Zur Kollektion ↗</a></section>;}
