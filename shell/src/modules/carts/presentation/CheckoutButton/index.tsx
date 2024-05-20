import { Button } from '@chakra-ui/react'

import { t } from 'utils'

import { CheckoutDialog } from './CheckoutDialog'
import { usePurchaseDialogStore } from './usePurchaseDialogStore'

const CheckoutButton = () => {
  const onOpen = usePurchaseDialogStore(state => state.onOpen)

  return (
    <>
      <Button w='100%' colorScheme='teal' onClick={() => onOpen()}>
        {t('Checkout')}
      </Button>
      <CheckoutDialog />
    </>
  )
}

export { CheckoutButton }
