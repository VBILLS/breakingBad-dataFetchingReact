import React, { useEffect, useState } from 'react';

import RandomCharacter from '../../components/RandomCharacter/RandomCharacter';

import { PageContainer } from './Characters.styles';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://www.breakingbadapi.com/api/characters');
      res
        .json()
        .then((res) => {
          setCharacters(res);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <PageContainer>
      <h2>CharactersPage!</h2>
      <p>Get all</p>
      <p>Search for a character.</p>
      <p>Get a random character</p>
      <ul>
        {characters.map((char) => {
          return <li key={char.char_id}>{char.name}</li>;
        })}
      </ul>
    </PageContainer>
  );
};

export default CharactersPage;
