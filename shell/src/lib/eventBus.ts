const eventBus = new Comment('event-bus')

export type Customer = {
  id: string
  name: string
}

export type Order = {
  product: string
  price: number
}

type EventsDefinition = {
  CUSTOMER_CREATED: Customer
  ORDER_CREATED: Order
  ORDER_SHIPPED: void
}

type PetstoreEvents = keyof EventsDefinition

function publish<T extends PetstoreEvents>(eventName: T, payload?: EventsDefinition[T]): void {
  const event = payload ? new CustomEvent(eventName, { detail: payload }) : new CustomEvent(eventName)
  eventBus.dispatchEvent(event)
}

type Unsubscribe = () => void

function subscribe<T extends PetstoreEvents>(
  eventName: T,
  handlerFn: (payload: EventsDefinition[T]) => void,
): Unsubscribe {
  const eventHandler = (event: Event) => {
    const eventPayload = (event as CustomEvent).detail as EventsDefinition[T]
    handlerFn(eventPayload)
  }
  eventBus.addEventListener(eventName, eventHandler)
  return () => {
    eventBus.removeEventListener(eventName, eventHandler)
  }
}

export { publish, subscribe }
