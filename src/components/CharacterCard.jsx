import React from "react";
import { Link } from "react-router-dom";


const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "status-alive";
      case "Dead":
        return "status-dead";
      default:
        return "status-unknown";
    }
  };

const CharacterCard = ({ character, size }) => {
    return (
  
        <Link
            to={`/character/${character.id}`}
            className={`character-card ${size === "large" ? "large-card" : "small-card"}`}
            >
                <div className="character-description">
                    <p>{character.name} - {character.type || "Unknown Type"}</p>
                </div>
                <div className="character-info2">
                    <div className="character-status">
                        <p className="character-status">Status:</p>
                        <p className={`${getStatusColor(character.status)}`}>
                            {character.status}
                        </p>
                    </div>
                    
                    <p className="character-date">Created: {new Date(character.created).toLocaleDateString()}</p>
                </div>
                

        </Link>
    );
}

export default CharacterCard;