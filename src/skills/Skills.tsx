import React from 'react'
import style from './Skills2.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "../skill/Skill";

export const Skills2 = () => {
    return (
        <div className={style.skills}>
            <div className={`${styleContainer.container} ${style.containerSkills}`}>

                <div className={style.skillsTitle}>
                    <span>Skills</span>
                    <h3>Programming Skills</h3>
                </div>

                <div className={style.skillsText}>
                    <p>Any fool can work with intelligence in IT, you try without it!</p>
                </div>

                <div className={style.skillsBlock}>
                    <Skill title={"HTML && CSS"}
                           description = {" HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages"}/>
                    <Skill title={"JS"} description = {"blabla"}/>
                    <Skill title={"React"} description = {"yoyo"}/>
                    <Skill title={"Redux"} description = {"dada"}/>

                </div>
            </div>

        </div>)
}