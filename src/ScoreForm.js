import React from 'react';

class ScoreForm extends React.Component {

handleOnChange = (e) => {
  console.log(e.target.value)
}

render () {
  return(
    <div>
    <h1>The form!</h1>
  <form id="user-form" onSubmit={this.props.handleSubmit}>
          <input
              type="text"
              name="username"
              onClick={this.handleOnChange}
              />
            <h1>Your Score: {this.props.score}</h1>
            <button type="submit" className="button">
                Submit
            </button>
      </form>
    </div>
  )}
}
export default ScoreForm;
