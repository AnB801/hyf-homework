import './App.css'

const App = () => {
  const todos = [
    { id: 1, description: 'Get out of bed', when: 'Wed Sep 13 2017' },
    { id: 2, description: 'Brush teeth', when: 'Thu Sep 14 2017' },
    { id: 3, description: 'Eat breakfast', when: 'Fri Sep 15 2017' },
  ]

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          description={todo.description}
          when={todo.when}
        />
      ))}
    </div>
  )
}

const TodoItem = ({ id, description, when }) => {
  return (
    <div>
      <p>
        *{id} {description}, {when}
      </p>
    </div>
  )
}

export default App
