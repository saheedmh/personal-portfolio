



import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import '../../style/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const data = [
    {
        
        label: 'Home',
        to : '/'
    },

    {
        label: 'About',
        to : '/about'
    },
    {
        label: 'Skill',
        to : '/skill'
    },
    {
        label: 'Resume',
        to : '/resume'
    },
    {
        label: 'Testimonial',
        to : '/testimonial'
    },
   
    {
        label: 'Portfolio',
        to : '/portfolio'
    },

    {
        label: 'Contact',
        to : '/contact'
    },
   
    ]
    console.log(data.label)

const Navbars = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon =() =>{
        setToggleIcon(!toggleIcon)
             
    }
        
        return (
    <div >
      <nav className='navbar'>
        <div className='navbar__container'>

        <NavLink to={'/'}>
<h2>
<a  className='navbar__logo' style={{color:'var(--yellow-theme-main-color)',  textDecoration:'none'}} href="#" >SaheedMHTech</a>
</h2>
        </NavLink>

        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ""}`} style={{color:"white"}}>
        <li className='navbar__container__menu__item'><a href="#" className='navbar__container__menu__links'>Home</a></li>
<li className='navbar__container__menu__item'><a className='navbar__container__menu__links' href="#about">About</a></li>
<li className='navbar__container__menu__item'><a className='navbar__container__menu__links' href="#resume">Resume</a></li>
<li className='navbar__container__menu__item'><a className='navbar__container__menu__links' href="#skill">Skill</a></li>
<li className='navbar__container__menu__item'><a className='navbar__container__menu__links' href="#portfolio">Portfolio</a></li>
<li className='navbar__container__menu__item'><a className='navbar__container__menu__links' href="#testimonial">Testmonial</a></li>
<li className='navbar__container__menu__item'><a className='navbar__container__menu__links' href="#contact">Contact</a></li>

    
       
{/** 
<li className='navbar__container__menu__item'>
<a href="#">Home</a>
<a href="#about">About</a>
<a href="#experience">Experience</a>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#testimonial">Testmonial</a>

<a href="#contact">Contact</a></li>
**/}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
        {
            toggleIcon ? <HiX size={30}/>: <FaBars size={30}/>
        }
        </div>
        <div>
            <FontAwesomeIcon icon={faFacebook} style={{}}/>
            <i className=' fab faFacebook'></i>
                    </div>
      </nav>
    </div>
  )
}

export default Navbars

  



