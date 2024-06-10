import { Signal } from 'use-signals'

const getData = () => {
  const value = localStorage.getItem('count')
  if (value === null) return 0
  return Number(value)
}

const count = new Signal.State<number>(getData())

export default count
