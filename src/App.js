import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import CharacterSearch from './components/CharacterSearch/CharacterSearch';
import RandomCharacter from './components/RandomCharacter/RandomCharacter';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container className='App-Container'>
        <Switch>
          <Route exact path='/characters/search' component={CharacterSearch} />
          <Route exact path='/characters/random' component={RandomCharacter} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
