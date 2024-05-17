import React from 'react'
import './Navbar.css';

const Navbar = ( { darkMode, toggleDarkMode } ) => {
  return (
    <nav className={darkMode && "dark-first"}>

        <div className='left'>

            <div className='brand'>TextUtils</div>
            <ul>
                <li style={darkMode ? {color:"white"} : {color:"black"}}>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>

        </div>

        <div className='right'>

            <input type="checkbox" id="toggle"/>
            <label id="switch" for="toggle" onClick={()=>toggleDarkMode()}>
                <div id="circle"></div>
            </label>

            <p style={darkMode ? {color:"white"} : {color:"black"}}>Enable {darkMode ? 'light' : 'dark'} mode</p>

        </div>

    </nav>
  )
}

export default Navbar