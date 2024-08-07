import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import { App } from './components/'
import theme from 'assets/theme'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
