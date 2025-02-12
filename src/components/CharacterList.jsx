import CharacterCard from "./CharacterCard";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const CharacterList = ({ searchQuery, setResultCount }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null);
    const API_URL="https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        if (!searchQuery) return;
        setLoading(true);
        setError(null);

        axios
            .get(`${API_URL}?name=${searchQuery}`)
            .then((response) => {
                const allCharacters = response.data.results || [];
                setCharacters(allCharacters.slice(0, 8));
                setResultCount(response.data.results ? response.data.results.length : 0);
            })
            .catch(() => {
                setError("Character not found!")
                setResultCount(0);
            })
            .finally(() => setLoading(false));
    }, [searchQuery]);

    if (!searchQuery || searchQuery.length < 3) {
        return null;
      }

    return(
        <div className="character-list-container">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="character-grid">
                {characters.slice(0, 2).map((char) => (
                    <CharacterCard key={char.id} character={char} size="large" />
                ))}
            </div>
            <div className="character-grid small-grid">
                {characters.slice(2, 8).map((char) => (
                    <CharacterCard key={char.id} character={char} size="small" />
                ))}
            </div>
      </div>
    )
}

export default CharacterList;