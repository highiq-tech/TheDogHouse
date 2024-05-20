import { Progress } from '@chakra-ui/react'

import { useNavigation } from 'shared/Router'

const LoaderBar = () => {
  const { state } = useNavigation()

  if (state === 'loading') {
    return <Progress size='xs' colorScheme='teal' isIndeterminate />
  }

  return null
}

export { LoaderBar }
