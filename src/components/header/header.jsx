import React from 'react'
import './header.css'
import { CTA } from './CTA'
import ME from '../../assets/logo4.png'/*When importing images or files no {} needed only when exporting files with react */
import {HeaderSocials} from './headerSocials'
const Header = () => {
  return (
    <header>

    <div className='container header_container'>
      <h5> Hello I'm </h5>
      <h1>Frederick Tetteh</h1>
      <h5 className='text-light'>Software Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt='me' />
      </div>
      <a href="#contact" className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;