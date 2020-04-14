import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// import fetchCharacterData from '../../api/breakingbad'

import { MyContainer } from './CharacterSearch.styles';

import './CharacterSearch.styles.css';
import CharacterCard from '../CharacterCard/CharacterCard.component';

function CharacterSearch() {
  const [name, setName] = useState('');
  const [chars, setChars] = useState([]);
  const [hasError, setErrors] = useState({});

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log('start of func', name);
    async function search(name) {
      const res = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      res
        .json()
        .then((res) => {
          setChars(res);
        })
        .catch((err) => setErrors(err));
    }
    search(name);
  };

  return (
    <MyContainer>
      <Container fluid className='searchBoxContainer'>
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
              <Button
                variant='outline-brand'
                type='submit'
                onClick={handleSearch}
              >
                Search
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <div className='searchContentBox'>
        {chars.map(({ char_id, ...props }) => {
          return <CharacterCard key={char_id} {...props} />;
        })}
      </div>
      {hasError > 1 && <span>Has Error: {JSON.stringify(hasError)}</span>}
    </MyContainer>
  );
}

export default CharacterSearch;
