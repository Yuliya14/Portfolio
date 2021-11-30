import React from 'react'
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    imgURL: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skillBlock}><div className={style.container}>
            <div className={style.skillIcon}><img className={style.image} src={props.imgURL}/></div>
            <h6 className={style.skillName}>{props.title}</h6>
            <div className={style.skillText}><p className={style.skillDescription}>{props.description}</p></div>
        </div></div>)
}