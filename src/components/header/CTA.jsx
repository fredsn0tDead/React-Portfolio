import React from 'react'
import CV from '../../assets/Resume_Frederick.Tetteh_1.pdf' //to import we need to go up to the main folder in order to reach the main directory
export const CTA =  () => {
  return (
    <div className='cta'>
        <a href={CV}  className='btn'> Download CV</a> 
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>{/*the hashtag will take us to a specific part on the page */}

    </div>
  )
}
