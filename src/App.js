import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Setup from './setup';
import Home from './home';
import Cartle from './cartle';
import Mycart from './mycart';
import Navbar from './navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/set">
          <Setup/>
        </Route>
        <Route exact path="/mycart">
          <Mycart/>
        </Route>
        <Route path="/:leo" children={<Cartle/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
