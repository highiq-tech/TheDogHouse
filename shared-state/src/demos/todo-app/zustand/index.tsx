import { useTodoStore } from './hooks/todo.store'
import { List, Wrapper } from '../components'
import Info from './components/Info'

const Zustand = () => {
  console.log('<Zustand> rendering')
  const { input, todos, addTodo, deleteTodo, handleInput, toggleCompleted } = useTodoStore(state => {
    return {
      input: state.input,
      todos: state.todos,
      lastUpdated: state.lastUpdated,
      addTodo: state.addTodo,
      deleteTodo: state.deleteTodo,
      handleInput: state.handleInput,
      toggleCompleted: state.toggleCompleted,
    }
  })

  const handleToggle = (id: string) => () => toggleCompleted(id)

  return (
    <Wrapper>
      <List
        inputValue={input}
        todos={todos}
        onToggle={handleToggle}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
        onInputChange={handleInput}
      />
      <Info />
    </Wrapper>
  )
}

export default Zustand
