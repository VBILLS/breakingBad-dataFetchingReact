import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// import fetchCharacterData from '../../api/breakingbad'

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
    console.log('start of func', name);
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
  };

  return (
    <div className='CharacterSearch-div'>
      <Container className='searchBoxContainer'>
        <Form>
          <Form.Group as={Row} controlId='formCharSearch'>
            <Form.Label column sm={3}>
              Search Characters:
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                name='search'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='basic-addon1'
                onChange={handleChange}
              />
            </Col>
            <Col sm={3}>
              <Button type='submit' onClick={handleSearch}>
                Search
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <div className='searchContentBox'>
        {chars.map(({ char_id, name, img, occ, stat, nickname }) => {
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
        })}
      </div>
      {hasError > 1 && <span>Has Error: {JSON.stringify(hasError)}</span>}
    </div>
  );
}

export default CharacterSearch;
