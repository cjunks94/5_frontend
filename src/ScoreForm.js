import React from 'react';
import './cyclic.css';
import alph from "./ALPHABET"


class ScoreForm extends React.Component {
state = {
  active:"",
  firstChar: 0,
  secondChar: 0,
  thirdChar: 0
}
handleOnChange = (e) => {
  console.log(e.target.value)
}
onComponentDidMount(){
  document.querySelector("#foo").innerHTML +=
    `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
       <script src="%PUBLIC_URL%/jquery.formnavigation.js"></script>
       <script src="%PUBLIC_URL%/keycodes.js"></script>`
}
handleClick=(e)=>{
  this.setState({
    active: e.target.dataset.name
  })
}
handleKeyUp=(e)=>{


  if(this.state.active){
    console.log("our keycoode" + e.which);
      console.log("active state" +this.state.active);
  switch(e.which){
    case 38:
    if(this.state[this.state.active]<25){
      this.setState({
        [this.state.active]: this.state[this.state.active]+1
      })}else{
        this.setState({
          [this.state.active]: 0
        })
      }
    break
    case 40:
    if(this.state[this.state.active]>0){
      this.setState({
        [this.state.active]: this.state[this.state.active]-1
      })}else{
        this.setState({
          [this.state.active]: 25
        })
      }
    break
    // case 37:
    //   switch(this.state.active){
    //     case "firstChar":
    //     this.setState({
    //       [this.state.active]: "thirdChar"
    //     })
    //     break
    //     case "secondChar":
    //     this.setState({
    //       [this.state.active]: "firstChar"
    //     })
    //     break
    //     case "thirdChar":
    //     this.setState({
    //       [this.state.active]: "thirdChar"
    //     })
    //     break
    //   }
    // break
    // case 39:
    //   switch(this.state.active){
    //     case "firstChar":
    //     this.setState({
    //       [this.state.active]: "secondChar"
    //     })
    //     break
    //     case "secondChar":
    //     this.setState({
    //       [this.state.active]: "thirdChar"
    //     })
    //     break
    //     case "thirdChar":
    //     this.setState({
    //       [this.state.active]: "firstChar"
    //     })
    //     break
    // }
  }
}
}
handleSubmit=(e)=>{
  this.props.handleSubmit(e, [alph[this.state.firstChar], alph[this.state.secondChar], alph[this.state.thirdChar]])
}


render () {

console.log(this.state);
  return(
    <div onKeyUp={this.handleKeyUp}>
    <h1>Your Score: {this.props.score}</h1>
  <form id="user-form" onSubmit={this.handleSubmit}>
          {/* <input
              type="text"
              name="username"
              onClick={this.handleOnChange}
              /> */}

            <div data-name="firstChar" onClick={this.handleClick}  className="cyclic_input" tabIndex="0">{alph[this.state.firstChar]}</div>
            <div data-name="secondChar" onClick={this.handleClick} className="cyclic_input" tabIndex="0">{alph[this.state.secondChar]}</div>
            <div data-name="thirdChar" onClick={this.handleClick}  className="cyclic_input" tabIndex="0">{alph[this.state.thirdChar]}</div>


          <br/><button type="submit" className="button">
                Submit
            </button>
      </form>
    </div>
  )}
}
export default ScoreForm;
//
// switch (e.which) {
//   case 39:
//     $(this).closest('td').next().find('input').focus(); break;
//   case 37:
//     $(this).closest('td').prev().find('input').focus(); break;
//   case 40:
//     $(this).closest('tr').next().children().eq($(this).closest('td').index()).find('input').focus(); break;
//   case 38:
//     $(this).closest('tr').prev().children().eq($(this).closest('td').index()).find('input').focus(); break;






//////
