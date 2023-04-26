import React, { useState, useEffect } from 'react'

import './App.css'
import todos from './todos'

function Todo({ todo, toggleDone, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />
      {/* <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
      >
        {todo.description}
      </span> */}
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  )
}

export function App(props) {
  const [todosState, setTodosState] = useState([])
  const [timeSpent, setTimeSpent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTimeSpent) => prevTimeSpent + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const addRandomTodo = () => {
    const existingTodoProbability = 0.5
    const randomNumber = Math.random()

    let randomTodo

    if (randomNumber <= existingTodoProbability) {
      const randomIndex = Math.floor(Math.random() * todos.length)
      randomTodo = {
        ...todos[randomIndex],
        id: Math.floor(Math.random() * 10000),
      }
    } else {
      randomTodo = {
        id: Math.floor(Math.random() * 10000),
        description: `Random todo ${Math.floor(Math.random() * 100)}`,
        done: false,
      }
    }

    setTodosState((prevState) => [...prevState, randomTodo])
  }

  const toggleDone = (id) => {
    setTodosState((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodosState((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <button className="add-random" onClick={addRandomTodo}>
        Add random todo
      </button>
      {todosState.length === 0 ? (
        <p>No items...</p>
      ) : (
        <ul>
          {todosState.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
      <p>Time spent on the website: {timeSpent} seconds</p>
    </div>
  )
}
