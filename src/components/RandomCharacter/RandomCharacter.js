import React, { useState, useEffect } from 'react';

import './RandomCharacter.styles.css';

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
    <div className='RandomCharacter-card'>
      <h1 className='rc-Name'>{name}</h1>
      <div className='rc-img'>
        <img className='rc-img' src={imgsrc} alt='chacter' width='400px' />
      </div>
      <div className='rc-info'>
        <p className='rc-occ'>
          Occupation:<span>{occ}</span>
        </p>
        <p className='rc-stat'>
          Status: <span>{stat}</span>
        </p>
      </div>
    </div>
  );
}

export default RandomCharacter;
