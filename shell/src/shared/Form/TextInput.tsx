import { ReactNode } from 'react'

import { FormControl, FormLabel, Input, FormErrorMessage, InputProps } from '@chakra-ui/react'

import { t } from 'utils'

type IProps = {
  id: string
  children: string | ReactNode
  isRequired?: boolean
} & InputProps

const TextInput = ({ id, children, isRequired = true, ...props }: IProps) => {
  const isInvalid = props.value === ''

  return (
    <FormControl id={id} isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{children}</FormLabel>
      <Input {...props} />
      {isInvalid ? <FormErrorMessage>{t('Field is required.')}</FormErrorMessage> : null}
    </FormControl>
  )
}

export { TextInput }
