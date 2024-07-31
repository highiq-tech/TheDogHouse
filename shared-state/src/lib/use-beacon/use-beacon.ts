/**
 * WIP: Not ready for use
 */
import { useCallback, useSyncExternalStore } from 'react'
import { Signal } from 'signal-polyfill'

type AnyBeacon<T> = Signal.State<T> | Signal.Computed<T>

export function useBeacon<T>(signal: AnyBeacon<T>): T {
  const subscribe = useCallback(
    (callback: () => void) => {
      let needsEnqueue = true
      const watcher = new Signal.subtle.Watcher(() => {
        if (needsEnqueue) {
          needsEnqueue = false
          queueMicrotask(processPending)
        }
      })
      function processPending() {
        needsEnqueue = true
        callback()
        watcher.watch() // re-watch
      }
      watcher.watch(signal)
      return () => watcher.unwatch(signal)
    },
    [signal],
  )
  const getSnapshot = () => signal.get()
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
