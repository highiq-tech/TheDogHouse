import { Box, Text } from '@chakra-ui/react'
import { useSignal } from 'use-signals'
import { isLoggedInSignal } from 'hooks/authSignal'

const NotLoggedIn = () => {
  console.log('<NotLoggedIn> rendering')
  const isLoggedIn = useSignal(isLoggedInSignal)
  return (
    <Box mb='1rem' display={isLoggedIn ? 'none' : 'inherit'}>
      <Text as='span'>You need to login to view the demo pages</Text>
    </Box>
  )
}

export default NotLoggedIn
