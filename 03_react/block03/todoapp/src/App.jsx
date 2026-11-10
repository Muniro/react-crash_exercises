import { useState } from "react"
import "./App.css"

export default function App() {
  const [draft, setDraft] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo(event) {
    event.preventDefault()

    const text = draft.trim()
    if (!text) return

    const todo = { id: crypto.randomUUID(), text, done: false }
    setTodos(current => [...current, todo])
    setDraft("")
  }

  function toggleTodo(id) {
    setTodos(current => current.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  function removeTodo(id) {
    setTodos(current => current.filter(todo => todo.id !== id))
  }

  return (
    <main>
      <h1>To-do list</h1>

      <form onSubmit={addTodo}>
        <input aria-label="New task" placeholder="What do you need to do?" value={draft} onChange={event => setDraft(event.target.value)} />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li className="todo-item" key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
              <span>{todo.text}</span>
            </label>
            <button className="delete-button" type="button" aria-label={`Delete ${todo.text}`} onClick={() => removeTodo(todo.id)}>
              <span aria-hidden="true">🗑️</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
