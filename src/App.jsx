import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CharacterList from './components/CharacterList'
function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <h1>Rick and Morty Search</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <CharacterList searchQuery={searchQuery} />
      <p className="read-the-docs">
        type character name
      </p>
    </>
  )
}

export default App
