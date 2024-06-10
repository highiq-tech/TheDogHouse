import { Box, Heading } from '@chakra-ui/react'
import { PlanetProps } from '../types'

type CustomBodyProps = { planet: PlanetProps; demoType: string }
const CustomBody = ({ planet, demoType }: CustomBodyProps): JSX.Element => {
  return (
    <>
      <Heading size='md'>
        {planet.name.toUpperCase()} WEATHER ({demoType})
      </Heading>
      <Box py='2'>
        Days in year: <span>{planet.sol}</span>
        <br />
        Temperature: <span>{planet.temperature}°C</span>
      </Box>
    </>
  )
}

export default CustomBody
