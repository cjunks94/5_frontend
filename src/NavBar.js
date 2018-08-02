import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

  return (
    <div className="navbar top fixed" id="App-header">
      <div className="navbar left">
        {/* img here */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/scores">Scores</NavLink>
        <NavLink to="/webvr">VR</NavLink>
      {/* <NavLink to="/form">form</NavLink> */}


      </div>

    </div>
  );
};
export default NavBar;
