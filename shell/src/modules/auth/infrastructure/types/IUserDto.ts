import { IUser } from 'modules/auth/types'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IUserDto extends IUser {
  password: string
}
