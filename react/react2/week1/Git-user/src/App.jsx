import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const GithubUserContext = createContext()

export const GithubUserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios(
          `https://api.github.com/search/users?q=${query}`
        )
        setLoading(false)
        setUsers(result.data.items)
        setError(null)
      } catch (error) {
        setLoading(false)
        setError(error.message)
        setUsers([])
      }
    }
    if (query) {
      fetchData()
    }
  }, [query])

  return (
    <GithubUserContext.Provider value={{ loading, error, users, setQuery }}>
      {children}
    </GithubUserContext.Provider>
  )
}

export const useGithubUser = () => useContext(GithubUserContext)

// Components
const SearchInput = () => {
  const { setQuery } = useGithubUser()

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  return (
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Search Github Users..."
      className="search-input"
    />
  )
}

const UserList = () => {
  const { loading, error, users } = useGithubUser()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching {error}...</p>
  if (!users.length) return <p>No results...</p>

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list-item">
          {user.login}
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  return (
    <GithubUserProvider>
      <div className="container">
        <h1 className="header">Github User Search</h1>
        <SearchInput />
        <UserList />
      </div>
    </GithubUserProvider>
  )
}
export default App
