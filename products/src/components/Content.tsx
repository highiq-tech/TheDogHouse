import { publish } from 'shell/eventBus'

const emitCustomerMessages = () => {
  publish('CUSTOMER_CREATED', { id: '0987654321', name: 'Bill Buckner' })
}

const emitOrderMessages = () => {
  publish('ORDER_CREATED', { product: 'Cat Bed', price: 19.99 })
  publish('ORDER_SHIPPED')
}

const Content = () => {
  return (
    <div
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        background: 'honeydew',
        fontWeight: 600,
        border: '1px solid rgb(153, 153, 153)',
        borderTop: 0,
        borderBottom: 0,
      }}>
      <div>PRODUCTS LISTINGS</div>
      <div>
        <button
          onClick={() => emitCustomerMessages()}
          style={{ marginRight: '10px', backgroundColor: 'rgb(0, 70, 68)', color: 'white' }}>
          Create Customer
        </button>
        <button onClick={() => emitOrderMessages()} style={{ backgroundColor: 'rgb(0, 70, 68)', color: 'white' }}>
          Create Order
        </button>
      </div>
    </div>
  )
}

export default Content
