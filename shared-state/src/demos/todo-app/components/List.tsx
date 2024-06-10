import { ChangeEvent, MouseEvent } from 'react'
import { Box, Button, Flex, Icon, Input, Text } from '@chakra-ui/react'
import { FaSquarePlus, FaCircleCheck, FaTrash } from 'react-icons/fa6'

type ListProps = {
  inputValue: string
  todos: { id: string; text: string; completed: boolean }[]
  onToggle: (id: string) => () => void
  onAddTodo: () => void
  onDeleteTodo: (id: string) => void
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const List = ({ inputValue, todos, onToggle, onAddTodo, onDeleteTodo, onInputChange }: ListProps) => {
  const handleDeleteTodo = (id: string) => (e: MouseEvent) => {
    e.stopPropagation()
    onDeleteTodo(id)
  }

  return (
    <Box className='list-container'>
      <Flex className='list-todo-item-container'>
        {todos.map((todo, _) => (
          <Flex className='list-todo-item' key={todo.id} onClick={onToggle(todo.id)}>
            <Text as='p'>{todo.text}</Text>
            <Flex className='list-icon-container'>
              {todo.completed ? <Icon as={FaCircleCheck} color='orange.500' /> : null}
              <Icon as={FaTrash} color='steelblue' onClick={handleDeleteTodo(todo.id)} />
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex className='list-input-container'>
        <Input className='list-input' value={inputValue} onChange={onInputChange} />
        <Button onClick={onAddTodo} className='list-button'>
          <Icon as={FaSquarePlus} boxSize={8} color='orange.500' />
        </Button>
      </Flex>
    </Box>
  )
}

export default List
