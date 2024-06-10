/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CallbackData } from 'types'

export class PubSub {
  private listeners: Record<string, CallbackData[]>

  constructor() {
    this.listeners = {}
  }

  subscribe(eventType: string, callback: CallbackData): void {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = []
    }
    this.listeners[eventType].push(callback)
  }

  unsubscribe(eventType: string, callback: CallbackData): void {
    if (this.listeners[eventType]) {
      this.listeners[eventType] = this.listeners[eventType].filter(cb => cb !== callback)
    }
  }

  publish(eventType: string, data: any): void {
    if (this.listeners[eventType]) {
      this.listeners[eventType].forEach(callback => callback(data))
    }
  }
}

export const pubSub = new PubSub()
