import { useState } from 'react'
import { lazy, Suspense } from 'react'
import { Customer, Order, publish, subscribe } from './lib/eventBus'

import Header from 'ui/Header'
import Footer from 'ui/Footer'
// import Content from 'products/Content'
const Content = lazy(() => import('products/Content'))

import './App.css'

const App = () => {
  const [customerMessages, setCustomerMessages] = useState<string[]>([])
  const [orderMessages, setOrderMessages] = useState<string[]>([])

  // Listen for events
  subscribe('CUSTOMER_CREATED', (customer: Customer) => {
    console.log('customer created', customer)
    const messages = customerMessages.concat(`Customer ${customer.name} created`)
    setCustomerMessages(messages)
  })
  subscribe('ORDER_CREATED', (order: Order) => {
    console.log('order created', order)
    const messages = orderMessages.concat(`Order ${order.product} created`)
    setOrderMessages(messages)
  })
  subscribe('ORDER_SHIPPED', () => console.log('order shipped'))

  // Emit events
  const fireCustomerEvent = () => {
    publish('CUSTOMER_CREATED', { id: '1234567890', name: 'Ryan Martin' })
  }

  const fireOrderEvent = () => {
    publish('ORDER_CREATED', { product: 'Dog Bed', price: 29.99 })
    publish('ORDER_SHIPPED')
  }

  return (
    <div className='App'>
      <Header />
      <div
        style={{
          // padding: '26px 0',
          fontSize: '18px',
          fontWeight: '400',
          border: '1px solid rgb(153, 153, 153)',
          borderTop: 0,
          borderBottom: 0,
          backgroundColor: 'darkseagreen',
          color: 'white',
          textAlign: 'left',
          paddingLeft: '15px',
        }}>
        Home Page
      </div>

      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          backgroundColor: 'white',
          border: 'solid 1px #999',
          borderTop: '0',
          borderBottom: '0',
        }}>
        <div style={{ flex: 'auto', paddingBottom: '10px', borderRight: 'solid 1px #999' }}>
          <h3 style={{ fontSize: '1.2em', fontWeight: '500', marginBottom: 0, color: 'darkslategray' }}>CUSTOMERS</h3>
          <ul style={{ display: 'contents' }}>
            {customerMessages.map(msg => (
              <li key={msg} style={{ color: 'lightslategray', fontSize: '12px', listStyle: 'none', fontWeight: '500' }}>
                {msg}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 'auto', paddingBottom: '10px' }}>
          <h3 style={{ fontSize: '1.2em', fontWeight: '500', marginBottom: 0, color: 'darkslategray' }}>ORDERS</h3>
          <ul style={{ display: 'contents' }}>
            {orderMessages.map(msg => (
              <li key={msg} style={{ color: 'lightslategray', fontSize: '12px', listStyle: 'none', fontWeight: '500' }}>
                {msg}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0',
          backgroundColor: 'darkseagreen',
          border: 'solid 1px #999',
          borderTop: 0,
          borderBottom: 0,
        }}>
        <button onClick={fireCustomerEvent}>Add New Customer</button>
        <button onClick={fireOrderEvent}>Add New Order</button>
      </div>
      <Suspense fallback={<div>Loading Products Component...</div>}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
