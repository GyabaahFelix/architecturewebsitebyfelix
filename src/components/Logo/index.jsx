import React from 'react'
import "./Logo.css"
import { PiBuildingsFill } from 'react-icons/pi'

const Logo = () => {
  return (
    <div className='logo'>
      <div className="icon__container">
        <PiBuildingsFill/>
      </div>
      <h1 className="name">FELIX <span>GEE</span><h6>El Fenomeno</h6></h1>
    </div>
  )
}

export default Logo