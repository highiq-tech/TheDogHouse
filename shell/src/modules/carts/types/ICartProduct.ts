import { IProduct } from 'modules/products/types'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ICartProduct extends IProduct {
  quantity: number
}
