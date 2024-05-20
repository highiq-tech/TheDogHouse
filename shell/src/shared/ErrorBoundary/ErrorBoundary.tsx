/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ReactNode } from 'react'
import { ErrorBoundary as Boundary, ErrorBoundaryPropsWithFallback } from 'react-error-boundary'

import { ErrorPageStrategy } from 'shared/Result'

export type FallbackProps<ErrorType> = {
  error: ErrorType
}

export type ErrorFallback<ErrorType> = ComponentType<FallbackProps<ErrorType>>

type ErrorBoundaryProps<ErrorType> = {
  onResetKeysChange?: ErrorBoundaryPropsWithFallback['onResetKeysChange']
  onReset?: () => void
  onError?: (
    error: Error,
    info: {
      componentStack: string
    },
  ) => void
  fallback?: ErrorFallback<ErrorType> | React.ReactElement<any, any>
  resetKeys?: Array<any>
}

export type IErrorBoundaryProps<ErrorType> = {
  children: ReactNode
} & ErrorBoundaryProps<ErrorType>

export const ErrorBoundary = <ErrorType extends Error>({
  fallback,
  children,
  ...props
}: IErrorBoundaryProps<ErrorType>) => {
  return (
    <Boundary FallbackComponent={(fallback as any) ?? ErrorPageStrategy} {...props}>
      {children}
    </Boundary>
  )
}
