import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

// const title = 'React'

type UserType = { name: string; age: number; dob: string }
type UserProps = {
  user: UserType
}

const user1: UserType = { name: 'Ryan Martin', age: 40, dob: '02/14/1976' }
const UnstableNestedComponent = (props: UserProps) => {
  const { user } = props
  console.log(user)
  return (
    <div>
      My name is {user.name}. I&apos;m {user.age} years old.
    </div>
  )
}

type SomethingType = { count: number; title: string }
const Something = ({ count, title }: SomethingType) => {
  // Correct implementation
  return <div>{!count && title}</div>

  // Incorrect implementation
  // return <div>{count && title}</div>
}

type ValueType = number | null | string
type ValueProps = {
  val: ValueType
  message: string
}

const value1: ValueType = 0
const value2: ValueType = NaN
const value3: ValueType = ''
const value4: ValueType = 1
const UnexpectedLeakedValuesComponent = (props: ValueProps) => {
  const { val, message } = props

  // Correct implementation
  return <div>{val ? <Something count={0} title={message} /> : 'Invalid value'}</div>

  // Incorrect implementation: Throws react/jsx-no-leaked-render eslint error
  // return <div>{val && <Something count={0} title={message} />}</div>
}

const App = () => {
  const [count, setCount] = useState<number>(1)

  return (
    <div className='App'>
      <Header />
      <div style={{ padding: '24px', height: '100px' }}>REMOTE APP</div>
      <UnstableNestedComponent user={user1} />
      <UnexpectedLeakedValuesComponent val={value1} message={'Passed in 0'} />
      <UnexpectedLeakedValuesComponent val={value2} message={'Passed in NaN'} />
      <UnexpectedLeakedValuesComponent val={value3} message={'Passed in empty string'} />
      <UnexpectedLeakedValuesComponent val={value4} message={'Passed in 1'} />
      <button onClick={() => console.log(setCount(count + 1))}>Say Hi {count} times</button>
      <Footer />
    </div>
  )
}

export default App
