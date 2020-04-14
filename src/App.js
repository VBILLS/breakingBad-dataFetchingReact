import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import CharacterSearch from './components/CharacterSearch/CharacterSearch';
import RandomCharacter from './components/RandomCharacter/RandomCharacter';
import CharactersPage from './pages/Characters/Characters.page';
import DeathsPage from './pages/Deaths/Deaths.page';
import EpisodesPage from './pages/Episodes/Episodes.page';
import QuotesPage from './pages/Quotes/Quotes.page';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/characters' component={CharactersPage} />
        <Route exact path='/deaths' component={DeathsPage} />
        <Route exact path='/episodes' component={EpisodesPage} />
        <Route exact path='/quotes' component={QuotesPage} />
        <Route exact path='/characters/search' component={CharacterSearch} />
        <Route exact path='/characters/random' component={RandomCharacter} />
      </Switch>
    </div>
  );
}

export default App;
