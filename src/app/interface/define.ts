export interface Product {
    title: any
    discountdTotal:number,
    id:number,
    products: Array<Productitem>,
    total:number,
    totalProducts: number,
    totalQuantity:number,
    thumbnail: string,
}

export interface Productitem{
    discountPercentage:number,
    discountedTotal:number,
    price:number,
    quantity:number,
    id: number,
    title: string,
    thumbnail: string,
    total:number
    addedToCart?: boolean;
}
  