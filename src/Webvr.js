import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import { Route, Redirect } from 'react-router'
//this file was a learning process half of these scripts and functions may not be needed. refactor
class Webvr extends React.Component {
  constructor(props) {
  super(props);

  // Next up create a new Unity Content object to
  // initialise and define your WebGL build. The
  // paths are relative from your index file.
  this.unityContent = new UnityContent(
    //"./unity-webvr-export-master/AsteroidsWebGL/Build/AsteroidsWebGL"
    "./unity-webvr-export-master/AsteroidsWebGL/Build/AsteroidsWebGL.json",
    "./unity-webvr-export-master/AsteroidsWebGL/BuildUnityLoader.js",
    "./unity-webvr-export-master/AsteroidsWebGL/Build/AsteroidsWebGL.asm.code.unityweb",
    "./unity-webvr-export-master/AsteroidsWebGL/Build/AsteroidsWebGL.asm.framework.unityweb",
    "./unity-webvr-export-master/AsteroidsWebGL/Build/AsteroidsWebGL.asm.memory.unityweb",
    "./unity-webvr-export-master/AsteroidsWebGL/Build/AsteroidsWebGL.data.unityweb",
  );


    this.unityContent.on("GameOver", score => {
      // Now we can use the score to for example
      // display it on our React app.
      this.props.handleScore(score)
   })
}

  componentDidMount () {
    appendVR()
  }

  componentWillUnmount () {
    unappendVR()
  }

  render () {
    return(
      
      <Unity unityContent={this.unityContent} />

 )}
}


const appendVR = () => {
  // document.querySelector('#webvr').style.display='block'
  document.querySelector("#foo").innerHTML +=
    `<script src="%PUBLIC_URL%/AsteroidsWebGL/vendor/gl-matrix-min.js"></script>
      <script src="%PUBLIC_URL%/AsteroidsWebGL/vendor/webvr-polyfill.min.js"></script>
      <script src="%PUBLIC_URL%/AsteroidsWebGL/webvr.js"></script>`
}

const unappendVR = () => {
  // document.querySelector('#webvr').style.display='none'
  document.querySelector("#foo").innerHTML = ``
}


export default Webvr;
