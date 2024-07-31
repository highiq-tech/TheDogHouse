export type Observable<T> = {
  subscribe: (cb: () => void) => () => boolean
  getSnapshot: () => T
  set: (fn: (state: T) => T) => void
}

export function createObservable<T>(initialState: T): Observable<T> {
  const callbacks = new Set<() => void>()
  let state: T = initialState

  // subscribe
  const subscribe = (cb: () => void) => {
    callbacks.add(cb)
    return () => callbacks.delete(cb)
  }

  // getSnapshot
  const getSnapshot = () => state

  // setState
  const set = (fn: (state: T) => T) => {
    state = fn(state)
    callbacks.forEach(cb => cb())
  }

  return { subscribe, getSnapshot, set }
}
