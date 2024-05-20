import { ReactNode } from 'react'
import { Navigate } from 'shared/Router'
import { useAuthStore } from './authStore'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IRequireAuthProps {
  children: ReactNode
  to?: string
}

const RequireAuth = ({ children, to }: IRequireAuthProps) => {
  const isAuthenticated = useAuthStore(store => store.isAuthenticated)
  return isAuthenticated ? <>{children}</> : <Navigate to={to ?? '/'} />
}

export { RequireAuth }
