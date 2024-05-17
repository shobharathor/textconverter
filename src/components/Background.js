import React from 'react'
import './Background.css';

const Background = ( { darkMode } ) => {
  return (
    <div className='background' style={darkMode ? {backgroundColor: "gray"} : {backgroundColor: "white"}}>
      <div className='child1' style={darkMode ? {backgroundColor: '#5C5C5C'} : {backgroundColor: '#F1F1F1'}}></div>
      <div className='child2' style={darkMode ? {backgroundColor: '#1B1B1B'} : {backgroundColor: '#9EE8FF'}}></div>
    </div>
  )
}

export default Background;