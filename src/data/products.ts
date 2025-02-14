import { Product } from "../types";

const resp = await fetch("http://localhost:8000/goods");
console.log(resp);
export const products: Product[] = await resp.json();
