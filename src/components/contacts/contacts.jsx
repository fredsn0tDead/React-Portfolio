
import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



export const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nr5wm24', 'template_kdb14cr', form.current, process.env.REACT_APP_USERID)
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }; 

  return (
    <section id='contacts'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
          <div className='contact_options'>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
              <h4> Email</h4>
              <h5> frederick.tetteh@ontariotechu.net</h5>
              <a href='mailto:frederick.tetteh@ontariotechu.net' target='_blank'>Send Message</a>
            </article>

        
          </div>
          {/*End of COntaact Options*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
          

      </div>


    </section>
  )
}
