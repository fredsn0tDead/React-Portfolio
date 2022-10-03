import React from 'react'
import './footer.css'
import { FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Frederick</a>
      <ul className='permalinks'>
        <li><a href='#'></a>Home </li>
        <li><a href='#About'></a>About </li>
        <li><a href='#Experience'></a>Experience </li>
        <li><a href='#Portfolio'></a>Portfolio </li>
        <li><a href='#Contacts'></a>Contact </li>
      </ul>
    
    <div className='footer_socials'>
      <a href='https://facebook.com'><FaFacebookF/></a>
      <a href='https://instagram.com'><FiInstagram /></a>
      <a href='https://twitter.com'> <IoLogoTwitter /> </a>

    </div>

   
    </footer>
  )
}
