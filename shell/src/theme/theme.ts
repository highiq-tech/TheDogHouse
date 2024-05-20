import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config,
})

export const lightTheme = extendTheme({
  config: {
    ...config,
    initialColorMode: 'light',
  },
})

export const darkTheme = extendTheme({
  config: {
    ...config,
    initialColorMode: 'dark',
  },
})
