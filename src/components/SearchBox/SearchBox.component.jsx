import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const SearchBox = ({ handleSearch }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
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
  );
};

export default SearchBox;
