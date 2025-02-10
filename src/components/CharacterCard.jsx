import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    return (
        <Link to={`/character/${character.id}`} className="card">
            {/* <img src={character.image} alt={character.name} className="character-image"/> */}
            <div>
                <h3>{character.name} - {character.species}</h3>
                <p>Status: {character.status} Created: {character.created}</p>
            </div>
        </Link>
    )
}

export default CharacterCard;