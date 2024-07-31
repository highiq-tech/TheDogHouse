import { Signal } from 'use-signals'
import { User } from 'types'

export const userSignal = new Signal.State<User | null>(null)
export const isLoggedInSignal = new Signal.Computed(() => !!userSignal.get())
