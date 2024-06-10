import { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'

import { emit, on } from 'lib/event-emitter/index'
import { PlanetProps } from 'demos/planet-app/types'
import { earth, mars } from 'demos/planet-app/data/test-data'

import CustomBody from 'demos/planet-app/components/CustomBody'
import CustomButton from 'demos/planet-app/components/CustomButton'

import 'demos/planet-app/styles/index.css'

const changePlanet = (name: string) => {
  emit('PLANET_UPDATED', name === 'Earth' ? mars : earth)
}

export const EventEmitterDemo = () => {
  console.log('<EventEmitterDemo> rendering')
  const [planet, setPlanet] = useState<PlanetProps>(earth)

  on('PLANET_UPDATED', (planetEvent: PlanetProps) => {
    setPlanet(planetEvent)
  })

  return (
    <Card className='card-dark' direction={{ base: 'column', sm: 'row' }}>
      <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={planet.imageUrl} alt={planet.name} />
      <Stack>
        <CardBody textAlign='start'>
          <CustomBody planet={planet} demoType='Event Emitter' />
        </CardBody>
        <CardFooter>
          <CustomButton name={planet.name} clickHandler={changePlanet} />
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default EventEmitterDemo
