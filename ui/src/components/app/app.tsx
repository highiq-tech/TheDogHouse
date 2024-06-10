import { useEffect } from 'react'
import { Box, Flex, Button, Text } from '@chakra-ui/react'

import { useSignal } from 'use-signals'
import { counter } from 'sharedState/countSignal'

import { Footer, Header } from 'components'

import './app.css'

const App = () => {
  const count = useSignal<number>(counter)

  const increaseCount = () => counter.set(count + 1)
  const reduceCount = () => counter.set(count - 1)

  useEffect(() => {
    localStorage.setItem('count', String(count))
  }, [count])

  return (
    <Box className='App'>
      <Header />
      <Box className='body-container'>
        <Text className='title'>
          Cross Component
          <br />
          Communication Demo
        </Text>
        <Flex className='button-container'>
          <Button size='sm' onClick={reduceCount}>
            -
          </Button>
          <Button size='sm' onClick={() => counter.set(count + 1)}>
            {count}
          </Button>
          <Button size='sm' onClick={increaseCount}>
            +
          </Button>
        </Flex>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
