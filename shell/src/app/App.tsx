import { RouterProvider } from 'react-router-dom'
import { Center, Spinner } from '@chakra-ui/react'
import { router } from 'pages/router'
import { useAuthStore } from 'modules/auth/application'

const App = () => {
  const state = useAuthStore(store => store.state)

  if (state === 'finished') {
    return <RouterProvider router={router} />
  }

  return (
    <Center h='95vh'>
      <Spinner color='teal.400' size='xl' />
    </Center>
  )
}

export { App }
