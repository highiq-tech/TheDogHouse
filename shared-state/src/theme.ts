import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Tabs: {
      defaultProps: {
        variant: 'enclosed-colored',
      },
      variants: {
        'enclosed-colored': {
          tabpanel: {
            px: 0,
            padding: 3,
          },
          tablist: {
            button: {
              bg: 'slategray',
              color: 'white',
            },
          },
        },
      },
    },
  },
})

export default theme
