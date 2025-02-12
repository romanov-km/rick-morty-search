import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar'
import CharacterList from './components/CharacterList'
import CharacterPage from './components/CharacterPage'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [resultCount, setResultCount] = useState(0);

  return (
    <>
      <div className="app-container">
      <SearchBar setSearchQuery={setSearchQuery} resultCount={resultCount}/>
        
        <Routes>
          <Route path='/' element={<CharacterList searchQuery={searchQuery} setResultCount={setResultCount}/>}/>
          <Route path='/character/:id' element={<CharacterPage/>}/>
        </Routes>
      </div>
     
    </>
  )
}

export default App
