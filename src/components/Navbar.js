import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Assets/uc.jpg'
const Navbar = () => {
  return (
    <div className="main-box">
        <div className="margin-box">
            <div className="logo"><img src={Logo} alt="" />
            <span>Branding <br/> and Relations Cell</span></div>
            <ul className='nav-items'>
                <Link id="Home" to = '/'>Home</Link>
                <Link id="About" to = '/about'>About</Link>
                <Link id="Gallery" to = '/gallery'>Gallery</Link>
                <Link id="Testimonials" to ='/testimonials'>Testimonials</Link>
                <Link id="Our Team" to = '/ourTeam'>Our Team</Link>
                <Link id="Contact Us" to = '/contact'>Contact Us</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar