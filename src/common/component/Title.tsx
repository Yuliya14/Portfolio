import React from 'react'
import style from './Title.module.scss'

type titlePropsType = {
    title: string
}
export const Title = (props: titlePropsType) => <h3 className={style.fontAlt}>{props.title}</h3>
