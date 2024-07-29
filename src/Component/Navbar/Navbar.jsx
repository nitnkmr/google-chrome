import React from 'react'
import icon from "../../assets/logo/chromeicon.svg"
import expandIcon from "../../assets/logo/expand.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="navContainer">
        <div className="logo">
            <img src={icon} alt="" />
        </div>
        <div className="items">
            <ul>
                <li className='active'><div>Home</div></li>
                <li><div>The Browser by Google</div></li>
                <li><div>Features</div><img src={expandIcon} alt="" /></li>
                <li><div>Support</div><img src={expandIcon} alt="" /></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar