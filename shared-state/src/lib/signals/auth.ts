import { Signal } from 'use-signals'
import { User } from 'types'

export const user = new Signal.State<User | null>(null)

export const isLoggedIn = new Signal.Computed(() => {
  return !!user.get()
})
