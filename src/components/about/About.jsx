/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import NEW from '../../assets/new.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={NEW} alt='About Image' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>0</small>
                        </article>
                        <a href="#project">
                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon' />
                                <h5>Projects</h5>
                                <small>3</small>
                            </article>
                        </a>

                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum assumenda et, quasi rerum dicta dignissimos aut saepe sed ipsa veritatis,
                        omnis ex hic architecto debitis cumque nisi autem aspernatur a!
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About