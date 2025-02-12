import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios";

const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL="https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        axios.get(`${API_URL}${id}`).then((response) => {
          setCharacter(response.data);
          setLoading(false);
        });
      }, [id]);

      if (loading) return <p>Loading...</p>;

      return (
        <div className="character-details">
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location.name}</p>
          <Link to="/">Back to search</Link>
        </div>
      );
}

export default CharacterPage;