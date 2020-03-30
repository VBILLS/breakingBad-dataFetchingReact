import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import './RandomCharacter.styles.scss';

function RandomCharacter() {
  const [name, setName] = useState('');
  const [imgsrc, setImgsrc] = useState('');
  const [occ, setOcc] = useState('');
  const [stat, setState] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://www.breakingbadapi.com/api/character/random'
      );
      res
        .json()
        .then(res => {
          res = res[0];
          setName(res.name);
          setImgsrc(res.img);
          setOcc(res.occupation);
          setState(res.status);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <Card
      style={{ width: '18rem', backgroundColor: '#4f4563', color: '#fdffeb' }}
      className='RandomCharacter-card'
    >
      <Card.Title className='rc-Name'>{name}</Card.Title>
      <Card.Img className='rc-img' src={imgsrc} alt='chacter' />
      <Card.Text className='rc-info'>
        Occupation:<span>{occ}</span>
        <br />
        Status: <span>{stat}</span>
      </Card.Text>
    </Card>
  );
}

export default RandomCharacter;
