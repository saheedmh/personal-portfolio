import React from 'react'
import './style/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <section className='navs'>
      <a href="#"  title='Home' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
    <a href="#about" title='about' onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' :''}><AiOutlineUser/></a>
    <a href="#experience"  title='experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' :''}><BiBook/></a>
    <a href="#services"  title='service'  onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active' :''}><RiServiceLine /></a>
    <a href="#contact"  title='contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' :''}><BiMessageSquareDetail /> </a>
   
    </section>
    
    
  )
}

export default Nav
