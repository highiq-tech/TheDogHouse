/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from 'react'

type StateType = {
  get: () => any
  set: (value: any) => void
  subscribe: (callback: any) => () => boolean
}

export const createState = (initialData?: any): StateType => {
  const store = useRef(initialData ?? { first: '', last: '' })
  const get = useCallback(() => store.current, [])
  const subscribers = useRef(new Set())
  const set = useCallback((value: any) => {
    store.current = { ...store.current, ...value }
    return subscribers.current.forEach((callback: any) => callback())
  }, [])
  const subscribe = useCallback((callback: any) => {
    subscribers.current.add(callback)
    return () => subscribers.current.delete(callback)
  }, [])

  return { get, set, subscribe }
}

export function useStateData(store: StateType) {
  const [data, setData] = useState(store.get())

  useEffect(() => {
    const checkForUpdates = () => {
      const snapshot = store.get()
      if (data !== snapshot) {
        setData(snapshot)
      }
    }
    const unsubscribe = store.subscribe(checkForUpdates)
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [store, data])

  return data
}
