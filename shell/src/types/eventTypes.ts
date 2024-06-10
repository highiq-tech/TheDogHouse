export type Customer = {
  id: string
  name: string
}

export type Order = {
  product: string
  price: number
}

export type EventsDefinition = {
  CUSTOMER_CREATED: Customer
  ORDER_CREATED: Order
  ORDER_SHIPPED: void
}

export type StoreEvents = keyof EventsDefinition
export type Callback = () => void
