import { useState } from 'react'
import React, { Component } from 'react'
import './App.css'
import todos from './todos'

class App extends Component {
  state = {
    todos: [],
    timeSpent: 0,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ timeSpent: prevState.timeSpent + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  addRandomTodo = () => {
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

    this.setState((prevState) => ({ todos: [...prevState.todos, randomTodo] }))
  }

  toggleDone = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }))
  }

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }))
  }

  render() {
    const { todos, timeSpent } = this.state

    return (
      <div className="App">
        <h1>Todo List</h1>
        <button className="add-random" onClick={this.addRandomTodo}>
          Add random todo
        </button>
        {todos.length === 0 ? (
          <p>No items...</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => this.toggleDone(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.done ? 'line-through' : 'none',
                  }}
                >
                  {todo.description}
                </span>
                <button
                  className="delete"
                  onClick={() => this.deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <p>Time spent on the website: {timeSpent} seconds</p>
      </div>
    )
  }
}

export default App
