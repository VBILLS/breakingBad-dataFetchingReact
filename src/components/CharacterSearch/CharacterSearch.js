import React, { useState } from 'react';

import './CharacterSearch.styles.css';

function CharacterSearch() {
  const [name, setName] = useState('');
  const [chars, setChars] = useState([]);
  const [hasError, setErrors] = useState({});

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    setName(e.target.value);

    async function search(name) {
      const res = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      res
        .json()
        .then(res => {
          setChars(res);
        })
        .catch(err => setErrors(err));
    }
    search(name);
    console.log(chars);
  };

  return (
    <div className='CharacterSearch-div'>
      <div className='searchBoxContainer'>
        <label htmlFor='search'>Search for a Character:</label>
        <input onChange={handleChange} type='text' name='search' />
        <button type='submit' onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className='searchContentBox'>
        {chars.map(({ char_id, name, img, occ, stat, nickname }) => {
          return (
            <div className='CharacterSearch-indCard' key={char_id}>
              <h1 className='char-Name'>{name}</h1>
              <img className='char-img' src={img} alt='Character' />
              <p className='char-occ'>Occupation: {occ}</p>
              <p className='char-status'>Status: {stat}</p>
              <p className='char-nickname'>Nickname: {nickname}</p>
            </div>
          );
        })}
      </div>
      {hasError > 1 && <span>Has Error: {JSON.stringify(hasError)}</span>}
    </div>
  );
}

export default CharacterSearch;
