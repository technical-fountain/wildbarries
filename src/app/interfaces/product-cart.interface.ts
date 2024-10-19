export interface ProductCartInterface {
    id: number,
    userId: number,
    discountedTotal: number,
    products: Array<ProductItemOfProductCartInterface>,
    total: number,
    totalProducts: number,
    totalQuantity: number,
}

export interface ProductItemOfProductCartInterface {
    id: number,
    price: number,
    discountedTotal: number,
    discountPercentage: number,
    quantity: number,
    thumbnail: string,
    title: string,
    total: number,
}