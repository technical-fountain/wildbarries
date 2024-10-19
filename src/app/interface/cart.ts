import { Product } from "./define";

export interface Cart {
    carts: Array<Product>;
    limit: number,
    skip:number,
    total: number
  }