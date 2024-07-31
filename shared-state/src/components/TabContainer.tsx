import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { useSignal } from 'use-signals'
import { isLoggedInSignal } from 'hooks/auth.signals'

import EventEmitterDemo from 'demos/planet-app/apps/event-emitter-demo'
import PubSubDemo from 'demos/planet-app/apps/pub-sub-demo'
import TodoDemo from 'demos/todo-app'

const TabContainer = () => {
  console.log('<TabContainer> rendering')
  const isLoggedIn = useSignal(isLoggedInSignal)
  return (
    <Tabs isFitted variant='enclosed-colored' display={isLoggedIn ? 'inherit' : 'none'}>
      <TabList mb='1em'>
        <Tab _selected={{ color: 'white', bg: '#2c3e50' }}>Event Emitter</Tab>
        <Tab _selected={{ color: 'white', bg: '#2c3e50' }}>Pub/Sub</Tab>
        <Tab _selected={{ color: 'white', bg: '#2c3e50' }}>Todo</Tab>
      </TabList>
      <TabPanels bgColor={'slategray'}>
        <TabPanel>
          <EventEmitterDemo />
        </TabPanel>
        <TabPanel>
          <PubSubDemo />
        </TabPanel>
        <TabPanel>
          <TodoDemo />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabContainer
