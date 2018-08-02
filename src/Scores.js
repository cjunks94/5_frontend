import React from 'react';
import './Score.css';
import TableComponent from './TableComponent';

class Scores extends React.Component{

  render()
  {return(
    <div>
      <h1>High Scores!</h1>
    {/* <p>The score currently is: {this.props.score}</p> */}
      <ul>
        {/* <li className="game-container">
          <div className="user">USER</div>
          <div className="score">SCORE</div>
          <div className="game">GAME</div>
        </li> */}
        {this.props.allScores.length ? <TableComponent allScores={this.props.allScores}/> : null}
      </ul>
    </div>
  )}
}
export default Scores;
//<li>{score.user_name} scored {score.score} in {score.game_name}</li>
