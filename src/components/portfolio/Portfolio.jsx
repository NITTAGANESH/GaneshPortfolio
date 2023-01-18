/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'
import IMG7 from '../../assets/portfolio7.jpeg'

const Portoflio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portoflio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target="_blank">Github</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target="_blank">Github</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target="_blank">Github</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target="_blank">Github</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target="_blank">Github</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG7} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target="_blank">Github</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portoflio