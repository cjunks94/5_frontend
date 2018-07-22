import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Scores from './Scores';
import Webvr from './Webvr';
import './App.css';

class App extends Component {
  render() {
    console.log('in app render');
    return (
      <Router>
      <div className="App">
        <header className="App-header">
            <Navbar/>
            <div>
              <Route exact path="/" render={()=> <Home/>} />
              <Route exact path="/scores" render={()=> <Scores/>} />
              <Route exact path="/webvr" render={()=> <Webvr/>} />
            </div>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
