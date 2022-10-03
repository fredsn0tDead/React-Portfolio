import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="www.linkedin.com/in/frederick-tetteh-9911bc" targets="_blank"><BsLinkedin/></a>{/*targets = "_blank ensures it opens in a new tab*/}
        <a href="https://github.com" targets="_blank"><FaGithub/></a>
    </div>
  )
}
