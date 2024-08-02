/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiCode } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    // eslint-disable-next-line no-unused-vars
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href='#project' onClick={() => setActiveNav("#project")} className={activeNav === '#project' ? 'active' : ''}><BiCode /></a>
            <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>

    )
}

export default Nav