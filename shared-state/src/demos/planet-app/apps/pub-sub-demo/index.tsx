import { SetStateAction, useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'

import { PubSub } from 'lib/pub-sub'
import { PlanetProps } from 'demos/planet-app/types'
import { earth, mars } from 'demos/planet-app/data/test-data'

import CustomBody from 'demos/planet-app/components/CustomBody'
import CustomButton from 'demos/planet-app/components/CustomButton'

import 'demos/planet-app/styles/index.css'

const pubSub = new PubSub()
const changePlanet = (name: string) => {
  pubSub.publish('planetData', name === 'Earth' ? mars : earth)
}

const PubSubDemo = () => {
  console.log('<PubSubDemo> rendering')
  const [planet, setPlanet] = useState<PlanetProps>(earth)

  useEffect(() => {
    const handleDataUpdate = (data: SetStateAction<PlanetProps>) => setPlanet(data)
    pubSub.subscribe('planetData', handleDataUpdate)
    return () => {
      pubSub.unsubscribe('planetData', handleDataUpdate)
    }
  }, [])

  return (
    <Card className='card-dark' direction={{ base: 'column', sm: 'row' }}>
      <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={planet.imageUrl} alt={planet.name} />
      <Stack>
        <CardBody textAlign='start'>
          <CustomBody planet={planet} demoType='Pub/Sub' />
        </CardBody>
        <CardFooter>
          <CustomButton name={planet.name} clickHandler={changePlanet} />
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default PubSubDemo
