/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSyncExternalStore } from 'react'

let eventCount: number = 0
let listeners: any[] = []

export function useStore() {
  const eventCount = useSyncExternalStore(subscribe, getSnapshot)
  return [eventCount, update] as const
}

function getSnapshot() {
  return eventCount
}

function subscribe(listener: any) {
  listeners = [...listeners, listener]
  return () => {
    listeners = listeners.filter(l => l !== listener)
  }
}

function update(newValue: number) {
  console.log('>> useStore | update | newValue:', newValue)
  eventCount = newValue
  for (const listener of listeners) {
    listener()
  }
}
