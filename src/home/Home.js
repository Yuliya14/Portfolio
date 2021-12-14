import React from 'react'
import style from './Home.module.scss'
import imgMe from "../assets/imgAboutMe.jpg"

export const Home = () => {
    return <section className={style.sectionAbout}>

            <div className={style.container}>
                <div className={style.imgBox}>
                    <img src={imgMe}/>
                </div>
                <div className={style.aboutMe}>
                    <h3>Yuliya Dovgun</h3>
                    <h5>Hello! I'm {" "}
                        <span className={style.colorTheme}>Front-end (React.JS)</span>
                        {" "} developer
                    </h5>
                    <p>I design and develop services for customers,
                        specializing in creating stylish, modern websites,
                        web services and online stores.
                        My passion is to design digital user experiences through the bold interface
                        and meaningful interactions. Check out my Portfolio
                    </p>
                    <div className={style.aboutList}>
                        <div className={style.containerAbout}>
                            <div className={style.media}>
                                <label>Birthday</label>
                                <p>14th april 1997</p>
                            </div>
                            <div className={style.media}>
                                <label>Age</label>
                                <p>24 Yr</p>
                            </div>
                            <div className={style.media}>
                                <label>Residence</label>
                                <p>Belarus</p>
                            </div>
                            <div className={style.media}>
                                <label>City</label>
                                <p>Minsk</p>
                            </div>
                        </div>
                        <div className={style.containerAbout}>
                            <div className={style.media}>
                                <label>E-mail</label>
                                <p>julia1997.04.14@mail.ru</p>
                            </div>
                            <div className={style.media}>
                                <label>Phone</label>
                                <p>+375(33)304-11-66</p>
                            </div>
                            <div className={style.media}>
                                <label>LinkedIn</label>
                                <p><a
                                    href={"https://www.linkedin.com/in/yuliya-dovgun-171668214/"}>yuliya-dovgun</a></p>
                            </div>
                            <div className={style.media}>
                                <label>Freelance</label>
                                <p>Available</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.cvBar}>
                        <a className={style.cvTheme} href={"img"} download>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

    </section>
}