import React from 'react'
import style from './Home.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Home = () => {
    return <div className={style.home}>

        <div className={`${styleContainer.container} ${style.containerHome}`}>
            <div className={style.homeAbout}>
                <h6>Hello, I'm</h6>
                <h1>Yuliya Dauhun</h1>
                <h4>JavaScript & React.JS Developer</h4>
            </div>
        </div>
    </div>
}