import CharacterCard from "./CharacterCard";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const API_URL = "https://rickandmortyapi.com/api/character/";

const CharacterList = ({ searchQuery }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchQuery) return;
        setLoading(true);
        setError(null);

        axios
            .get(`${API_URL}?name=${searchQuery}`)
            .then((response) => setCharacters(response.data.results || []))
            .catch(() => setError("Character not found!"))
            .finally(() => setLoading(false));
    }, [searchQuery]);

    return(
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                {characters.map((char) => (
                    <CharacterCard key={char.id} character={char}/>
                ))}
            </div>
        </div>
        
    )
}

export default CharacterList;