import { httpService } from 'utils'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ICredentials {
  username: string
  password: string
}

export const loginUser = (body: ICredentials) => {
  return httpService.post<string>('auth/login', body)
}
