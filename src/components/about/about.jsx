import React from 'react'
import './about.css'
import ME from '../../assets/me12.png'/*When importing images or files no {} needed only when exporting files with react */
import {FaAward} from 'react-icons/fa'
import {FaFiusers} from 'react-icons/fi'
import {FaFolderOpen} from 'react-icons/fa'
export const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
          <div className='about_me'>
              <div className='about_me-image'>
                <img src={ME} alt='About Image'/>
              </div>
          </div>
        <div className='about_content'>
          <div className='about_cards'>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small> 3+ Year Working</small>
            </article>

        
          
            <article className='about_card'>
              <FaFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>

            </article>

          </div>
          <p>
           Self-Driven software developer looking to break into the financial technology industry. Throughout my university career, 
           I have had the opportunity to work on a diverse range of projects, further expanding my skill set and 
           problem-solving abilities. This exposure to various projects has allowed me to develop a well-rounded perspective and adaptability, 
           which are essential traits for success in the ever-evolving field of software development.

            
          </p>
          <a href='#contacts' className='btn btn-primary'>Lets Talk</a>

        </div>

        </div>


    </section>
  )
}
