import { ReactNode } from 'react'
import { Navigate } from 'shared/Router'
import { useAuthStore } from './authStore'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IRequirePubProps {
  children: ReactNode
  to?: string
}

const RequirePub = ({ children, to }: IRequirePubProps) => {
  const isAuthenticated = useAuthStore(store => store.isAuthenticated)
  return isAuthenticated ? <Navigate to={to ?? '/'} /> : <>{children}</>
}

export { RequirePub }
