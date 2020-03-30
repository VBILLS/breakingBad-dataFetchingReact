import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import CharacterSearch from './components/CharacterSearch/CharacterSearch';
import RandomCharacter from './components/RandomCharacter/RandomCharacter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/characters/search' component={CharacterSearch} />
        <Route exact path='/characters/random' component={RandomCharacter} />
      </Switch>
    </div>
  );
}

export default App;
