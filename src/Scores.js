import React from 'react';

const Scores = (props) => {
  return(
    <div>
      <h1>High Scores!</h1>
      <p>The score currently is: {props.score}</p>
      <ul>
        // add each score in here
      </ul>
    </div>
  )
}
export default Scores;
