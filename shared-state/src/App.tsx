import { Box } from '@chakra-ui/react'

import Header from 'components/Header'
import NotLoggedIn from 'components/NotLoggedIn'
import TabContainer from 'components/TabContainer'

import './App.css'

const App = () => {
  console.log('<App> rendering')
  return (
    <Box className='app'>
      <Header />
      <NotLoggedIn />
      <TabContainer />
    </Box>
  )
}

export default App
