import { ChangeEvent } from 'react'
import { create } from 'zustand'

type Todo = { id: string; text: string; completed: boolean }

const generateUniqueId = () => {
  return Math.random().toString(36)
}

export type TodoState = {
  input: string
  todos: Todo[]
  lastUpdated?: string
  toggleCompleted: (id: string) => void
  addTodo: () => void
  deleteTodo: (id: string) => void
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useTodoStore = create<TodoState>(set => ({
  todos: [{ id: '12345678-12345678-12345678-12345678', text: 'test', completed: false }],
  input: '',
  addTodo: () => {
    return set(state => ({
      todos: [...state.todos, { id: generateUniqueId(), text: state.input, completed: false }],
      input: '',
    }))
  },
  handleInput: (e: ChangeEvent<HTMLInputElement>) => {
    set({ input: e.target.value })
  },
  deleteTodo: (id: string) => {
    set(state => ({
      todos: state.todos.filter((todo, _) => todo.id !== id),
    }))
  },
  toggleCompleted: (id: string) => {
    set(state => ({
      lastUpdated: new Date().toLocaleString(),
      todos: state.todos.map((todo, _) => {
        if (id === todo.id) return { ...todo, completed: !todo.completed }
        return todo
      }),
    }))
  },
}))
