import React from 'react'
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.skillIcon}></div>
            <span className={style.skillName}>{props.title}</span>
            <p className={style.skillDescription}>{props.description}</p>

        </div>)
}