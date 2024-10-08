import React, { useState } from 'react';
import { getMarvelCharacters } from '../../components/services/marvelApi';
import './Marvel.css';

const Marvel = () => {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleSearch = async () => {
    if (!name) {
      alert('Por favor, insira o nome de um personagem.');
      return;
    }
    const results = await getMarvelCharacters(name);
    setCharacters(results);
  };

  return (
    <div className="marvel-container">
      <h2>Busca de Personagens Marvel</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Digite o nome do personagem"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="characters-list">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div key={char.id} className="character-card">
              <img
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <h3>{char.name}</h3>
              <p>{char.description || 'Sem descrição disponível.'}</p>
            </div>
          ))
        ) : (
          <p>Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Marvel;
