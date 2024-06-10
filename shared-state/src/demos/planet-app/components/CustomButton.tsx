import { Button } from '@chakra-ui/react'

type CustomButtonProps = { name: string; clickHandler: (name: string) => void }
const CustomButton = ({ name, clickHandler }: CustomButtonProps): JSX.Element => {
  return <Button onClick={() => clickHandler(name)}>View {name === 'Earth' ? 'Mars' : 'Earth'}</Button>
}

export default CustomButton
