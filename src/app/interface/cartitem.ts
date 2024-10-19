export interface Cartitem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    discountPercentage?: number;
    discountedTotal: number,
    total: number
}
