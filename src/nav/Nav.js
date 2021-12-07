import React from 'react'
import style from './Nav.module.css'
export const Nav = () => {
    return <nav className={style.container}>
        <div className={style.headerTransparent}>
            <button className={style.navbarToggler}>
                <div className = {style.hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className={style.mobileMenu}>
                <ul className={style.navBar}>
                    <li><a className = {style.navLink} href = "">Home</a></li>
                    <li><a className = {style.navLink} href = "">Skills</a></li>
                    <li><a className = {style.navLink} href = "">Portfolio</a></li>
                    <li><a className = {style.navLink} href = "">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
}