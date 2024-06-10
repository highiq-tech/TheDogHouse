import { Flex, Button } from '@chakra-ui/react'
import { Callback } from 'types'

const ButtonGroup = ({
  triggerCustomerEvent,
  triggerOrderEvent,
}: {
  triggerCustomerEvent: Callback
  triggerOrderEvent: Callback
}) => {
  return (
    <Flex className='app-button-group'>
      <Button className='light-button' size='xs' onClick={triggerCustomerEvent}>
        Add New Customer
      </Button>
      <Button className='light-button' size='xs' onClick={triggerOrderEvent}>
        Add New Order
      </Button>
    </Flex>
  )
}

export default ButtonGroup
