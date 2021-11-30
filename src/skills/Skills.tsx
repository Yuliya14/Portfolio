import React from 'react'
import style from './Skills.module.css'
import {Skill} from "../skill/Skill";
import {Title} from "../common/component/Title";
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import typescript from '../assets/typescript.png'
import javascript from '../assets/javascript.png'

export const Skills = () => {
    return (
        <section className={style.skillsSection}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.skillsTitle}>
                        <Title title={"My skills"}/>
                        <p>I like to create and contribute to open source projects with using next developer technologies:
                            React(JS/TS), Redux, HTML & CSS. Now
                            I am improving my skills in this
                            direction and expanding them with
                            new technologies</p>
                    </div>

                    <div className={style.commonBlock}>
                      <div className={style.smallTitle}>
                          <h4 className={style.fontAlt}>Skills</h4>
                          <div className={style.skillsBox}>
                              <Skill title={"HTML"} imgURL={html}
                                     description={"HTML allows you to structure our application or website"}/>
                              <Skill title={"CSS"} imgURL={css} description={"With the help of CSS, we endow our application with beautiful styles, which guarantees attracting the user's attention"}/>
                              <Skill title={"JavaScript"} imgURL={javascript}  description={"JS is the brain of our application, which organizes organizes and connects all the vital controls for the application to function properly"}/>
                              <Skill title={"TypeScript"} imgURL={typescript}  description={"In turn, TS gives us the opportunity to write code as efficiently as possible."}/>
                              <Skill title={"React"} imgURL={react} description={"React will help us write and reuse components, which will greatly speed up application development"}/>
                              <Skill title={"Redux"} imgURL={redux}  description={"When using Redux, it is possible to separate the BLL from the user interface layer, thereby ensuring the principle of sole responsibility"}/>
                          </div>
                      </div>
                    </div>

                    <div className={style.commonBlock}>
                        <div className={style.smallTitle}>
                            <h4 className={style.fontAlt}>Education</h4>
                            <div className={style.educationBox}>
                                <span className={style.darkBG}>2021</span>
                                <h6>Frontend</h6>
                                <p>IT-INCUBATOR</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </section>)
}