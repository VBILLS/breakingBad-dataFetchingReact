import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import {
  CharacterCards,
  EpisodesPageContainer,
  EpisodesMap,
} from './Episodes.styles';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function getEpisodes() {
      fetch('https://www.breakingbadapi.com/api/episodes')
        .then((res) => res.json())
        .then((res) => setEpisodes(res))
        .catch((err) => console.log(err));
    }
    getEpisodes();
  }, []);

  return (
    <EpisodesPageContainer>
      <h1>Episodes Page </h1>
      <EpisodesMap>
        {episodes.map((ep) => {
          return (
            <Card key={ep.episode_id}>
              <Card.Title>{ep.title}</Card.Title>
              <Card.Subtitle>{ep.air_date}</Card.Subtitle>
              <Card.Text>
                S{ep.season} - E{ep.episode}
              </Card.Text>
              <CharacterCards>
                {ep.characters.map((char) => (
                  <p>{char.name}</p>
                ))}
              </CharacterCards>
            </Card>
          );
        })}
      </EpisodesMap>
    </EpisodesPageContainer>
  );
};

export default EpisodesPage;
