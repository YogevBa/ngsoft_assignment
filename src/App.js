import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from './screens/mainScreen/MainScreen';
import Header from './components/header/Header';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={MainScreen} />
      </Switch>
    </div>
  );
};

export default App;
