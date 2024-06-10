import { Box, Text } from '@chakra-ui/react'
import { Signal } from 'use-signals'
import { lastUpdatedSignal, todosSignal } from '../hooks/todo.signals'

const Info = () => {
  const totalCompleted = new Signal.Computed(() => todosSignal.get().filter(t => t.completed).length)

  return (
    <Box className='info-container-group'>
      <Box className='info-container'>
        <Text as='p'>Total Completed:</Text>
        <Text as='p'>{totalCompleted.get()}</Text>
      </Box>
      <Box className='info-container'>
        <Text as='p'>Last Updated:</Text>
        <Text as='p'>{lastUpdatedSignal.get()}</Text>
      </Box>
    </Box>
  )
}

export default Info
