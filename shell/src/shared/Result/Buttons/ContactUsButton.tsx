import { Button, ButtonProps } from '@chakra-ui/react'

import { t } from 'utils'

import { useNotImplementedYetToast } from 'shared/Toast'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IProps extends ButtonProps {}

const ContactUsButton = (props: IProps) => {
  const notImplemented = useNotImplementedYetToast()

  return (
    <Button onClick={notImplemented} {...props}>
      {t('Contact us!')}
    </Button>
  )
}

export { ContactUsButton }
