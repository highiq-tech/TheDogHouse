import { ReactNode } from 'react'
import { Box, Text } from '@chakra-ui/react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box className='wrapper-container'>
      <Box>
        <Text as='h1' className='wrapper-header'>
          Todo Demo App
        </Text>
        {children}
      </Box>
    </Box>
  )
}

export default Wrapper
