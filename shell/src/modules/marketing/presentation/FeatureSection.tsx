import { ReactNode } from 'react'

import { CheckIcon } from '@chakra-ui/icons'
import { Box, Text, Stack, VStack, GridItem, Flex, SimpleGrid, chakra, CardBody, Card } from '@chakra-ui/react'
import { useBrandColor, useSecondaryTextColor } from 'theme'

const FeatureSection = () => {
  const brandColor = useBrandColor()
  const textColor = useSecondaryTextColor()

  return (
    <Card>
      <CardBody px={{ base: 4, lg: 10 }} py={{ base: 6, lg: 10 }}>
        <SimpleGrid
          alignItems='center'
          columns={{
            base: 1,
            lg: 3,
          }}
          spacingY={{
            base: 12,
            lg: 32,
          }}
          spacingX={{
            base: 0,
            lg: 24,
          }}>
          <GridItem
            colSpan={{ base: 1, lg: 1 }}
            as={VStack}
            spacing={0}
            alignSelf='start'
            alignItems={{ base: 'center', lg: 'start' }}>
            <chakra.h2 fontWeight='semibold' textTransform='uppercase' letterSpacing='wide'>
              Everything you need
            </chakra.h2>
            <chakra.h2
              color={brandColor}
              fontSize={{
                base: '2xl',
                md: '4xl',
              }}
              fontWeight='extrabold'
              lineHeight='shorter'
              letterSpacing='tight'
              textAlign={{ base: 'center', lg: 'start' }}>
              All-in-one place
            </chakra.h2>
            <Text color={textColor} textAlign={{ base: 'center', lg: 'start' }} pt={2}>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: 'grid',
              }}
              gridTemplateColumns={{
                md: 'repeat(2,1fr)',
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}>
              <Feature title='Browse hundreds of pet supplies'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis.
              </Feature>
              <Feature title='Let us train your dog'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis.
              </Feature>
              <Feature title='Leave your dog with us over the weekend'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis.
              </Feature>
              <Feature title='We have the best groomers around'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis.
              </Feature>
              <Feature title='We ship orders over night'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis.
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </CardBody>
    </Card>
  )
}

type IFeatureProps = {
  title: string
  children: ReactNode
}

const Feature = (props: IFeatureProps) => {
  const { title, children } = props
  const textColor = useSecondaryTextColor()

  return (
    <Flex>
      <Flex shrink={0}>
        <CheckIcon fontSize='lg' color='green.500' />
      </Flex>
      <Box ml={4}>
        <chakra.dt fontSize='lg' fontWeight='bold' lineHeight='6'>
          {title}
        </chakra.dt>
        <chakra.dd mt={2} color={textColor}>
          {children}
        </chakra.dd>
      </Box>
    </Flex>
  )
}

export { FeatureSection }
