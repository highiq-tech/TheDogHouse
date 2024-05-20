// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IProduct {
  productId: number
  quantity: number
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ICart {
  id: number
  userId: number
  date: string
  products: Array<IProduct>
}
