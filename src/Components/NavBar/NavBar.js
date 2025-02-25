import React from 'react'
import { useNavigate } from "react-router-dom";
import "./NavBar.css"
function NavBar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsAuthenticated(false); 
    navigate("/"); 
  };
  return (
    <div className="navbar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <button className="signout-button" onClick={handleSignOut}> Sign Out</button>
      <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar