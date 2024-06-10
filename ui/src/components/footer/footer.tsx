import { useEffect } from 'react'
import { Box, ButtonGroup, IconButton, Flex, Button } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { useSignal } from 'use-signals'
import { counter } from 'sharedState/countSignal'

import './footer.css'

const Footer = () => {
  const count = useSignal<number>(counter)

  const increaseCount = () => counter.set(count + 1)
  const reduceCount = () => counter.set(count - 1)

  useEffect(() => {
    localStorage.setItem('count', String(count))
  }, [count])

  return (
    <Flex className='footer-container'>
      <Box>The Dog House @ 2024</Box>
      <Box className='footer-right'>
        <ButtonGroup isAttached>
          <IconButton
            size='xs'
            fontSize='0.8em'
            aria-label='Decrement count'
            icon={<MinusIcon />}
            onClick={reduceCount}
          />
          <Button size='xs' fontSize='0.8rem' onClick={() => counter.set(count + 1)}>
            {count}
          </Button>
          <IconButton
            size='xs'
            fontSize='0.8em'
            aria-label='Increment count'
            icon={<AddIcon />}
            onClick={increaseCount}
          />
        </ButtonGroup>
      </Box>
    </Flex>
  )
}

export default Footer
