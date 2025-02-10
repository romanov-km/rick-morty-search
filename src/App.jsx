import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <h1>Rick and Morty Search</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
