/* eslint-disable */ 
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cir.jpg'
import IMG2 from '../../assets/box-office4.jpg'
import IMG3 from '../../assets/spotify4.jpg'
import IMG4 from '../../assets/Tic-Tac-Toe.jpg'
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
                <h3> Spotify Music SoundTrackTracker</h3>
                <div className='portfolio_item-cta'>
                < a href='https://github.com/fredsn0tDead' className='btn' target='_blank'>Github</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={IMG2} alt="" />
                </div>
                <h3> Box-Office Showtime Express</h3>
                <div className='portfolio_item-cta'>
                < a href='https://github.com/fredsn0tDead/box-office' className='btn' target='_blank'>Github</a>
                <a href ='https://fredsn0tdead.github.io/box-office/' className='btn' target='blank' >Demo</a>
                </div>
            </article>
            <article className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={IMG4} alt="" />
                </div>
                <h3> Tic-Tac-Toe</h3>
                <div className='portfolio_item-cta'>
                < a href='https://github.com/fredsn0tDead/Tic-tac-toe' className='btn' target='_blank'>Github</a>
                <a href ='https://phobic-instrument.surge.sh/' className='btn' target='blank' >Demo</a>
                </div>
            </article>
            
        </div>

    </section>
  )
}
