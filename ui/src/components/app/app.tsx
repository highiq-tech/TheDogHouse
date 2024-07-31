/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useSyncExternalStore } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

// import { useSignal } from 'use-signals'
// import { counter } from 'sharedState/countSignal'

import { createObservable } from 'lib/createStore'
import { createState, useStateData } from 'hooks/useState'

import { Footer, Header } from 'components'

import './app.css'

type CountProps = { clickCount: number; eventCount: number }
type UserProps = { first: string; last: string }
type CounterProps = { count: number }

const countSeed: CountProps = { clickCount: 0, eventCount: 0 }
const userSeed: UserProps = { first: 'ryan', last: 'martin' }
const counterSeed: CounterProps = { count: 1 }

const observable = createObservable<CountProps>(countSeed)

const App = () => {
  const userStore = createState(userSeed)
  const userData = useStateData(userStore)
  const counterStore = createState(counterSeed)
  const countData = useStateData(counterStore)

  console.group('>> UI/App | createState | useStateData')
  console.log('userStore.get():', userStore.get())
  console.log('userData:', userData)
  console.log('counterStore.get():', counterStore.get())
  console.log('countData:', countData)
  console.groupEnd()

  ///////////////////////////////////////////////////////////
  // Signal State Setup
  ///////////////////////////////////////////////////////////
  // const clickCount = useSignal<number>(counter)
  // const increaseCounter = () => counter.set(clickCount + 1)
  // const reduceCounter = () => counter.set(clickCount - 1)

  ///////////////////////////////////////////////////////////
  // hooks/useState setup
  ///////////////////////////////////////////////////////////
  const increaseCounter = () => counterStore.set({ count: counterStore.get().count + 1 })
  const reduceCounter = () => counterStore.set({ count: counterStore.get().count - 1 })
  const updateUser = () => userStore.set({ first: 'john', last: 'doe' })
  const seedUser = () => userStore.set(userSeed)

  // useEffect(() => {
  //   console.log('>> UI/App | useEffect | clickCount:', clickCount)
  //   localStorage.setItem('clickCount', String(clickCount))
  // }, [clickCount])

  useEffect(() => {
    console.log('>> UI/App | useEffect | userData.first:', userData.first)
    console.log('>> UI/App | useEffect | userData.last:', userData.last)
  }, [userData.first, userData.last])

  useEffect(() => {
    console.log('>> UI/App | useEffect | countData.count:', countData.count)
  }, [countData.count])

  ///////////////////////////////////////////////////////////
  // Observable State Setup
  ///////////////////////////////////////////////////////////
  const store = useSyncExternalStore(observable.subscribe, () => observable.getSnapshot())
  console.log('>> UI/App | store:', store)

  const increaseEvent = (property: string) => {
    const increasedValue = store[property as keyof CountProps] + 1
    const data = { ...store, [property]: increasedValue }
    observable.set(prev => ({ ...prev, ...data }))

    console.group('>> UI/App | increaseEvent')
    console.log(`${property}:`, increasedValue)
    console.log('data:', data)
    console.groupEnd()
  }

  const reduceEvent = (property: string) => {
    const reducedCount = store[property as keyof CountProps] - 1
    const data = { ...store, [property]: reducedCount }
    observable.set(prev => ({ ...prev, ...data }))

    console.group('>> UI/App | reduceEvent')
    console.log(`${property}:`, reducedCount)
    console.log('data:', data)
    console.groupEnd()
  }

  return (
    <Box className='app'>
      <Header />
      <Box className='body-container'>
        <Text className='title'>Cross Component Communication Demo</Text>
        <Box className='section-container alt'>
          <Text as='h3'>CLICK COUNT DEMO</Text>
          <Box className='button-container'>
            <Button size='sm' onClick={() => reduceEvent('clickCount')}>
              -
            </Button>
            <Button size='sm'>{store.clickCount}</Button>
            <Button size='sm' onClick={() => increaseEvent('clickCount')}>
              +
            </Button>
          </Box>
        </Box>
        <Box className='section-container'>
          <Text as='h3'>EVENT COUNT DEMO</Text>
          <Box className='button-container'>
            <Button size='sm' onClick={() => reduceEvent('eventCount')}>
              -
            </Button>
            <Button size='sm'>{store.eventCount}</Button>
            <Button size='sm' onClick={() => increaseEvent('eventCount')}>
              +
            </Button>
          </Box>
        </Box>
        <Box className='section-container alt'>
          <Text as='h3'>USER PROFILE DEMO</Text>
          <Box className='button-container'>
            <Button size='sm' onClick={updateUser}>
              Update
            </Button>
            <Button size='sm' onClick={seedUser}>
              Seed
            </Button>
            <Button size='sm' variant='ghost' className='alt'>
              {userData.first} {userData.last}
            </Button>
          </Box>
        </Box>
        <Box className='section-container'>
          <Text as='h3'>COUNTER DEMO</Text>
          <Box className='button-container'>
            <Button size='sm' onClick={reduceCounter}>
              -
            </Button>
            <Button size='sm'>{counterStore.get().count}</Button>
            {/* <Button size='sm'>{clickCount}</Button> */}
            <Button size='sm' onClick={increaseCounter}>
              +
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
