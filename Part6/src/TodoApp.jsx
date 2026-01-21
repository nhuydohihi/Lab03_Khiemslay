import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ])

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTodos(prev => [...prev, newTodo])
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h2>Simple To-Do List</h2>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}
