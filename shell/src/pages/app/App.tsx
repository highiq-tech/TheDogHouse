import { Box } from '@chakra-ui/react'

import { useSignal } from 'use-signals'
import { counter } from 'sharedState/countSignal'
import { eventSignal, customerMessagesSignal, orderMessagesSignal } from './signals'
import { emit, on } from 'lib/eventBus'
import { Customer, Order } from 'types'

import Header from 'ui/Header'
import Footer from 'ui/Footer'
import Hero from './components/Hero'
import Content from './components/Content'
import ButtonGroup from './components/ButtonGroup'

import './App.css'

const triggerCustomerEvent = () => {
  emit('CUSTOMER_CREATED', { id: '1234567890', name: 'Ryan Martin' })
}

const triggerOrderEvent = () => {
  emit('ORDER_CREATED', { product: 'Dog Bed', price: 29.99 })
  emit('ORDER_SHIPPED')
}

on('CUSTOMER_CREATED', (customer: Customer) => {
  const messages = customerMessagesSignal.get().concat(`CUSTOMER: [${customer.name}] created`)
  customerMessagesSignal.set(messages)
  eventSignal.set(eventSignal.get() + 1)
})

on('ORDER_CREATED', (order: Order) => {
  const messages = orderMessagesSignal.get().concat(`ORDER: [${order.product}] created`)
  orderMessagesSignal.set(messages)
  eventSignal.set(eventSignal.get() + 1)
})

const App = () => {
  const count = useSignal<number>(counter)
  const eventCount = useSignal<number>(eventSignal)
  const customerMessages = useSignal<string[]>(customerMessagesSignal)
  const orderMessages = useSignal<string[]>(orderMessagesSignal)

  return (
    <Box className='app'>
      <Header />
      <Hero count={count} eventCount={eventCount} />
      <Content customerMessages={customerMessages} orderMessages={orderMessages}></Content>
      <ButtonGroup triggerCustomerEvent={triggerCustomerEvent} triggerOrderEvent={triggerOrderEvent} />
      <Footer />
    </Box>
  )
}

export default App
