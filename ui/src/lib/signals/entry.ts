/* eslint-disable @typescript-eslint/no-explicit-any */

let currentListener: any = undefined
type SignalTuple = [any, (newValue: any) => void]

function invokeCallback(callback: unknown) {
  if (typeof callback === 'function') {
    callback()
  }
}

function useSignal(initialValue: any): SignalTuple {
  let value = initialValue
  const subscribers = new Set()

  function get() {
    if (currentListener !== undefined) {
      subscribers.add(currentListener)
    }
    return value
  }

  function set(newValue: any) {
    value = newValue
    subscribers.forEach((fn: unknown) => invokeCallback(fn))
  }

  return [get, set]
}

function useEffect(callback: any): void {
  currentListener = callback
  callback()
  currentListener = undefined
}

export { useEffect, useSignal }
