import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Scores from './Scores';
import Webvr from './Webvr';
import ScoreForm from './ScoreForm';
import BASEURL from './baseUrl'
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      currentUser: '',
      gameOver: false,
      score: 0,
      allScores: []
    }

    // this.setState({
    //FETCH ALL SCORES FROM BACKEND FIRST
    // })
  }

  setScore=(score)=>{
    this.setState((prevState) => ({
      gameOver: true,
      score: score,
      allScores: prevState.allScores.push(score)
    }))
  }
  handleSubmit=(e)=>{
    console.log(e.target[0].value);
    e.preventDefault();
    this.setState({
      currentUser: 'e.target.value',
    })
      const options = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        'body': JSON.stringify({
             user: this.state.currentUser,
             score: this.state.score
           })
      }
    fetch(`${BASEURL}/users`, options)
  }

  render() {
    console.log('in app render');
    return (
      <Router>
      <div className="App">
        <header className="App-header">
            <Navbar handleScore={this.setScore} currentScore={this.state.allScores}/>
            <div>
              <Route exact path="/" render={(props)=> <Home/>} />
              <Route exact path="/scores" render={(props)=> <Scores {...props} score={this.state.score} allScores={this.state.allScores} />} />
              <Route exact path="/webvr" render={(props)=>
                  (!this.state.gameOver ? <Webvr {...props} handleScore={this.setScore}/> :
                  <ScoreForm {...props} score={this.state.score} handleSubmit={this.handleSubmit}/>)
              }/>
{/* {!this.state.gameOver ? <Route exact path="/webvr" render={(props)=><Webvr {...props} handleScore={this.setScore}/>}/> : <Route exact path="/form" render={(props)=><ScoreForm {...props} handleSubmit={this.handleSubmit} score={this.state.score}/>}/>} */}
            </div>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
