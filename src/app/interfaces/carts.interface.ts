import { ProductCartInterface } from "./product-cart.interface";

export interface CartsInterface {
    carts: Array<ProductCartInterface>,
    limit: number,
    skip: number,
    total: number
}