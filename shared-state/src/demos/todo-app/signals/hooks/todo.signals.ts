import { Signal } from 'use-signals'

const getData = () => {
  const value = localStorage.getItem('todoList')
  if (value === null) return []
  return JSON.parse(value)
}

export const inputSignal = new Signal.State<string>('')
export const lastUpdatedSignal = new Signal.State<string>('')
export const todosSignal = new Signal.State<{ id: string; text: string; completed: boolean }[]>(getData())
