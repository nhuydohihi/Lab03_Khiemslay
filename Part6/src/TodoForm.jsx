import { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (text.trim() === '') return

    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  )
}
