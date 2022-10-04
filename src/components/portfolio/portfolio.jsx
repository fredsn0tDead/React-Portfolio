import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project4.jpg'
export const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={IMG1} alt="" />
                </div>
                <h3> Content Image Retrieval</h3>
                <div className='portfolio_item-cta'>
                < a href='https://github.com/fredsn0tDead/Content-Image-Retrieval' className='btn' target='_blank'>Github</a>
                </div>
                
            </article>

            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={IMG3} alt=""  />
                </div>
                <h3> Spotify Data Pipeline</h3>
                <div className='portfolio_item-cta'>
                < a href='https://github.com/fredsn0tDead' className='btn' target='_blank'>Github</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={IMG2} alt="" />
                </div>
                <h3> Invasion From Space</h3>
                <div className='portfolio_item-cta'>
                < a href='https://github.com/fredsn0tDead/Invasion-of-Space' className='btn' target='_blank'>Github</a>
                </div>
            </article>
        </div>

    </section>
  )
}
