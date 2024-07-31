import { Box, Button, List, ListItem, Text } from '@chakra-ui/react'
import { useSignal } from 'use-signals'
import { userSignal } from 'hooks/auth.signals'
import { User } from 'types'

import './Header.css'

const dummyUserData: User = {
  name: 'John Doe',
  email: 'john@doe.com',
}

const Header = () => {
  console.log('<Header> rendering')
  const user = useSignal(userSignal)
  return (
    <Box as='header'>
      <Text as='h1'>The Dog House | Shared State Demos</Text>

      <List>
        {user ? <ListItem>{user.name}</ListItem> : null}
        {!user ? (
          <ListItem>
            <Button
              onClick={() => {
                userSignal.set(dummyUserData)
              }}>
              Login
            </Button>
          </ListItem>
        ) : (
          <ListItem>
            <Button
              onClick={() => {
                userSignal.set(null)
              }}>
              Logout
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  )
}

export default Header
