import React from 'react';
import style from './Footer.module.scss'
import telegram from '../assets/telegramIcon.png'
import instagram from '../assets/instagramIcon.png'
import linkedin from '../assets/linkedinIcon.png'
import mail from '../assets/mailIcon.png'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <span>Yuliya Dovgun</span>
                <div className={style.footerBlock}>
                    <a href={"#"}><img className={style.images} src={linkedin}/></a>
                    <a href={"#"}><img className={style.images} src={telegram}/></a>
                    <a href={"#"}><img className={style.images} src={instagram}/></a>
                    <a href={"#"}><img className={style.images} src={mail}/></a>
                </div>
            <span>© 2021. All rights reserved.</span>
        </footer>
    )
}