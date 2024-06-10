import { Box, Flex } from '@chakra-ui/react'

const Content = ({ customerMessages, orderMessages }: { customerMessages: string[]; orderMessages: string[] }) => {
  return (
    <Flex className='app-content-container'>
      <Box className='app-content-container-auto' borderRight='solid 1px #999'>
        <Box className='app-h3'>CUSTOMERS</Box>
        <ul className='app-ul'>
          {customerMessages.map((message: string, index: number) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </Box>
      <Box className='app-content-container-auto'>
        <Box className='app-h3'>ORDERS</Box>
        <ul className='app-ul'>
          {orderMessages.map((message: string, index: number) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </Box>
    </Flex>
  )
}

export default Content
