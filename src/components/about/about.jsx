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
              <small> 2+ Year Working</small>
            </article>

        
          
            <article className='about_card'>
              <FaFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Projects Completed</small>

            </article>

          </div>
          <p>
          I am a software engineering student with a background in accounting. 
          I previously sought to become a CPA but found a love of coding along the way. 
          I have experience in both front-end and back-end development through my projects throughout my software engineering degree. 
          Currently, I work as Technical Service Assistant at Ontario Tech University, where I am working on creating a database management system to run automated backups for SQLSERVER express users.
            
          </p>
          <a href='#contacts' className='btn btn-primary'>Lets Talk</a>

        </div>

        </div>


    </section>
  )
}
