import React from 'react'
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
export const Skills = () => {
    return <div></div>
}
/*
import {SkillsType} from "../App";
type SkillsPropsType = {
    skills: Array<SkillsType>
}

export const Skills = (props: SkillsPropsType) => {
    return <div className={style.skills}>
        <div className={`${styleContainer.container} ${style.containerSkills}`}>
            <div className={style.skillsInner}>
                <div className={style.skillsTitle}>
                    <span>Skills</span>
                    <h3>Programming Skills</h3>
                </div>
                <div className={style.skillsText}>
                    <p>Any fool can work with intelligence in IT, you try without it!</p>
                </div>
                <div>{
                    props.skills.map(sk => {
                        return <div className={style.skillsProgress} key={sk.id}>
                            <div className={style.progressInner}>
                    <span>
                        <span className={style.label}>{sk.name}</span>
                        <span className={style.number}>{sk.progress}</span>
                    </span>
                                <div className={style.background}>
                                    <div className={style.barOpen}>
                                        <div className={style.barIn}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                </div>
                <div className = {style.images}>
                   <img src={"https://freeiconshop.com/wp-content/uploads/edd/html-outline.png"}/>
                </div>
            </div>

        </div>
    </div>
}
*/
