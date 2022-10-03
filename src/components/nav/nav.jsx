import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {GoChecklist} from 'react-icons/go'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
export const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonBadgeFill/></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillJournalBookmarkFill/></a>
        <a href='#portfolio'onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoChecklist/></a>
        <a href='#contacts'onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><AiOutlineMessage/></a>


    </nav>
  )
}
