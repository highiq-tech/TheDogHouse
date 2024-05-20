import { useColorModeValue } from '@chakra-ui/react'

export const useBrandColor = () => {
  return useColorModeValue('teal.400', 'teal.300')
}
