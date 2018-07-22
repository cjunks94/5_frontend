import React from 'react';

class Webvr extends React.Component {

  componentDidMount () {
    appendVR()
  }

  componentDidUnMount () {
    unappendVR()
  }

  render () {
    return(
    <div>
    </div>

  )}
}


const appendVR = () => {
  document.querySelector('#webvr').style.display='block'
}

const unappendVR = () => {
  document.querySelector('#webvr').style.display='none'
}


export default Webvr;
