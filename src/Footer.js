import React from 'react'
import './style/foot.css'
import { FaFacebookF } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
function Footer() {
  return (
<footer>
  
  <div className="footer__social">
    <a href="https://facebook.com"><FaFacebookF/></a>
    <a href="https://instagram.com "><FiInstagram/></a>
    <a href="https://twitter.com">  <IoLogoTwitter/> </a>
  </div>

  <div className="footer__copyright">
    <small>saheed 2023, web developer.  at &copy;   all right reserved</small>
  </div>
</footer>
   )
}

export default Footer
