import { extendTheme } from '@chakra-ui/react'

import '@fontsource-variable/inter'
import '@fontsource-variable/karla'

const theme = extendTheme({
  fonts: {
    heading: `'Inter Variable', sans-serif`,
    body: `'Karla Variable', sans-serif`,
  },
})

export default theme
