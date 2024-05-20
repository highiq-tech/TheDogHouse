import { WarningTwoIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/react'

const WarningIcon = () => {
  const color = useColorModeValue('teal.400', 'teal.300')

  return <WarningTwoIcon boxSize={16} color={color} />
}

export { WarningIcon }
