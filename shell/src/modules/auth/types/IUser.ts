// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IUser {
  id: number
  email: string
  username: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  address: IAddress
  cartId: number
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IAddress {
  city: string
  street: string
  number: number
  zipcode: string
  geolocation: {
    lat: string
    long: string
  }
}
