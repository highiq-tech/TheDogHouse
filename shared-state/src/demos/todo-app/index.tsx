import { useState } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Signals from './signals'
import Zustand from './zustand'

import './index.css'

type Views = 'signals' | 'zustand'

const TodoDemo = () => {
  console.log('<TodoDemo> rendering')
  const [currentView, setCurrentView] = useState<'signals' | 'zustand'>('signals')
  const handleToggle = (view: Views) => () => setCurrentView(view)

  return (
    <Box className='todo-container'>
      <Flex className='todo-selector'>
        <Button className={currentView === 'signals' ? 'active' : undefined} onClick={handleToggle('signals')}>
          <Text as='h2'>Signals</Text>
        </Button>
        <Button className={currentView === 'zustand' ? 'active' : undefined} onClick={handleToggle('zustand')}>
          <Text as='h2'>Zustand</Text>
        </Button>
      </Flex>
      {currentView === 'signals' ? <Signals /> : <Zustand />}
    </Box>
  )
}

export default TodoDemo
