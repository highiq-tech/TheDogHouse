import { useState } from 'react'
import './App.css'

const _title = 'React'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Product Listing</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
