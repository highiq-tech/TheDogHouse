import { Callback, EventsDefinition, StoreEvents } from 'types'

const eventBus = new Comment('event-emitter')

function on<T extends StoreEvents>(eventName: T, handlerFn: (payload: EventsDefinition[T]) => void): Callback {
  const handler = (event: Event) => {
    const payload = (event as CustomEvent).detail as EventsDefinition[T]
    handlerFn(payload)
  }

  eventBus.addEventListener(eventName, handler)

  return () => {
    eventBus.removeEventListener(eventName, handler)
  }
}

function emit<T extends StoreEvents>(eventName: T, payload?: EventsDefinition[T]): void {
  const event = payload ? new CustomEvent(eventName, { detail: payload }) : new CustomEvent(eventName)
  eventBus.dispatchEvent(event)
}

export { on, emit }
