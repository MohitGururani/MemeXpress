import React from 'react'
import face from "../images/Troll Face.png"

const Header = () => {
  return (
    <div className='Header'>
      <img src={face} alt="face" className='header--image'/>
      <h2 className='header--title'>Meme Generator</h2>
    </div>
  )
}

export default Header
