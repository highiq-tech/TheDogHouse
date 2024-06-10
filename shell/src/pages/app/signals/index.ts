import { Signal } from 'use-signals'

export const eventSignal = new Signal.State<number>(0)
export const customerMessagesSignal = new Signal.State<string[]>([])
export const orderMessagesSignal = new Signal.State<string[]>([])
