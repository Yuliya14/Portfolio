import React, {MouseEvent, useState} from 'react'
import style from './Nav.module.css'

export const Nav = () => {
    const [active, setActive] = useState(false)
    const onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
        setActive(!active)
    }
    return <nav className={style.container}>
        {active
            ? <div className={style.headerTransparent}>
                <button onClick={onClickHandle} className={style.navbarToggler}>
                    <div className={style.hamburgerActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={style.mobileMenuActive}>
                    <ul className={style.navBar}>
                        <li><a className={style.navLink} href="">Home</a></li>
                        <li><a className={style.navLink} href="">Skills</a></li>
                        <li><a className={style.navLink} href="">Portfolio</a></li>
                        <li><a className={style.navLink} href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            : <div className={style.headerTransparent}>
                <button onClick={onClickHandle} className={style.navbarToggler}>
                    <div className={style.hamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={style.mobileMenu}>
                    <ul className={style.navBar}>
                        <li><a className={style.navLink} href="">Home</a></li>
                        <li><a className={style.navLink} href="">Skills</a></li>
                        <li><a className={style.navLink} href="">Portfolio</a></li>
                        <li><a className={style.navLink} href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        }
</nav>
}