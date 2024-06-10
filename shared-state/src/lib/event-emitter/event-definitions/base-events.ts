export type EventsDefinition = {
  TEST_EVENT: void
  LOG_EVENT: void
}

export type BaseEvents = keyof EventsDefinition
