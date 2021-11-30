import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <span>Yuliya Dauhun</span>
                <div className={style.footerBlock}>
                    <a href={"#"}><img className={style.images} src={"https://cdn-icons-png.flaticon.com/128/39/39699.png"}/></a>
                    <a href={"#"}><img className={style.images} src={"https://cdn-icons-png.flaticon.com/128/1384/1384031.png"}/></a>
                </div>
            <span>© 2021. All rights reserved.</span>
        </div>
    )
}