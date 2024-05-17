import React from 'react'

const Footer = () => {

  const customCss = {display:"flex", justifyContent:"center", padding:"0.5rem 1rem", background:"black", color:"white",border:"1px solid black"};

  return (
    <footer style={customCss}>
      <div style={{padding: "0.4rem 1rem", textAlign:"center"}}>Copyright@2024 | All Rights Reserved | by Rachit Garg</div>
    </footer>
  )
}

export default Footer