import { Box } from '@chakra-ui/react'

const Hero = ({ count, eventCount }: { count: number; eventCount: number }) => {
  return (
    <Box className='app-hero'>
      Home Page | {eventCount} Events Emitted | {count} Count
    </Box>
  )
}

export default Hero
