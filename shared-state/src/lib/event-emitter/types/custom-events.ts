import { EventsDefinition as EventsDefinitionBase } from './base-events'
import { Customer, Order, PlanetProps } from 'demos/planet-app/types'

export type EventsDefinition = {
  CUSTOMER_CREATED: Customer
  ORDER_CREATED: Order
  ORDER_SHIPPED: void
  PLANET_UPDATED: PlanetProps
} & EventsDefinitionBase

export type StoreEvents = keyof EventsDefinition
