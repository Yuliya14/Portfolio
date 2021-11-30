import React from 'react'
import style from './Title.module.css'

type titlePropsType = {
    title: string
}
export const Title = (props: titlePropsType) => <h3 className={style.fontAlt}>{props.title}</h3>
