import { useEffect } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useSignal } from 'use-signals'

import { counter } from 'sharedState/countSignal'
import { xAxis, yAxis } from 'hooks/axisSignal'

import './header.css'

const Header = () => {
  const count = useSignal<number>(counter)
  const x = useSignal(xAxis)
  const y = useSignal(yAxis)

  useEffect(() => {
    const listener = (event: { pageX: number; pageY: number }) => {
      xAxis.set(event.pageX.toFixed(2))
      yAxis.set(event.pageY.toFixed(2))
    }

    document.addEventListener('pointermove', listener)

    return () => {
      document.removeEventListener('pointermove', listener)
    }
  }, [])

  return (
    <Flex className='header-container'>
      <Flex className='header-left'>
        THE DOG HOUSE | <Text as='span'>{count} messages</Text>
      </Flex>
      <Flex className='header-right'>
        <Box mr={5}>x: {x}</Box>
        <Box>y: {y}</Box>
      </Flex>
    </Flex>
  )
}

export default Header
