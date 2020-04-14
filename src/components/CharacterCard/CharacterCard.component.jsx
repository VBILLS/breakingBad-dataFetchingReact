import React from 'react';
import Card from 'react-bootstrap/Card';

const CharacterCard = ({ char_id, name, img, occ, stat, nickname }) => {
  return (
    <Card
      style={{ width: '18rem', backgroundColor: '#4f4563' }}
      className='CharacterSearch-indCard'
      key={char_id}
    >
      <Card.Title className='char-Name'>{name}</Card.Title>
      <Card.Img className='char-img' src={img} alt='Character' />
      <Card.Body>
        <Card.Text>
          <p className='char-occ'>Occupation: {occ}</p>
          <p className='char-status'>Status: {stat}</p>
          <p className='char-nickname'>Nickname: {nickname}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
