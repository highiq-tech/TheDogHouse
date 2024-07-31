import { Callback } from 'types'
import { EventsDefinition, StoreEvents } from './types/custom-events'

const eventBus = new Comment('event-emitter')

function on<T extends StoreEvents>(eventName: T, handlerFn: (payload: EventsDefinition[T]) => void): Callback {
  const eventHandler = (event: Event) => {
    const payload = (event as CustomEvent).detail as EventsDefinition[T]
    handlerFn(payload)
  }

  eventBus.addEventListener(eventName, eventHandler)

  return () => {
    eventBus.removeEventListener(eventName, eventHandler)
  }
}

function emit<T extends StoreEvents>(eventName: T, payload?: EventsDefinition[T]): void {
  const event = payload ? new CustomEvent(eventName, { detail: payload }) : new CustomEvent(eventName)
  eventBus.dispatchEvent(event)
}

export { on, emit }
