import { ChangeEvent, useEffect } from 'react'

import { useSignal } from 'use-signals'
import { inputSignal, todosSignal, lastUpdatedSignal } from './hooks/todo.signals'

import Info from './components/Info'
import { List, Wrapper } from '../components'

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  inputSignal.set(e.target.value)
}

const handleToggle = (id: string) => () => {
  todosSignal.set(todosSignal.get().map((todo, _) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  lastUpdatedSignal.set(new Date().toLocaleString())
}

const handleAddTodo = () => {
  todosSignal.set([...todosSignal.get(), { id: window.crypto.randomUUID(), text: inputSignal.get(), completed: false }])
  inputSignal.set('')
}

const handleDeleteTodo = (id: string) => {
  todosSignal.set(todosSignal.get().filter((todo, _) => todo.id !== id))
}

type TodoType = { id: string; text: string; completed: boolean }[]
const Signals = () => {
  console.log('<Signals> rendering')

  const inputValue = useSignal<string>(inputSignal)
  const todosValue = useSignal<TodoType>(todosSignal)

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todosValue))
  }, [todosValue])

  return (
    <Wrapper>
      <List
        inputValue={inputValue}
        todos={todosValue}
        onToggle={handleToggle}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
        onInputChange={handleInputChange}
      />
      <Info />
    </Wrapper>
  )
}

export default Signals
