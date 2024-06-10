import { Box, Text } from '@chakra-ui/react'
import { useTodoStore } from '../hooks/todo.store'

const Info = () => {
  const [lastUpdated, totalCompleted] = useTodoStore(state => [
    state.lastUpdated,
    state.todos.filter(todo => todo.completed).length,
  ])

  return (
    <Box className='info-container-group'>
      <Box className='info-container'>
        <Text as='p'>Total Completed:</Text>
        <Text as='p'>{totalCompleted}</Text>
      </Box>
      <Box className='info-container'>
        <Text as='p'>Last Updated:</Text>
        <Text as='p'>{lastUpdated}</Text>
      </Box>
    </Box>
  )
}

export default Info
