import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar'
import CharacterList from './components/CharacterList'
import CharacterPage from './components/CharacterPage'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <h1>Rick and Morty Search</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/' element={<CharacterList searchQuery={searchQuery} />}/>
        <Route path='/character/:id' element={<CharacterPage/>}/>
      </Routes>
      
      <p className="read-the-docs">
        type character name
      </p>
    </>
  )
}

export default App
