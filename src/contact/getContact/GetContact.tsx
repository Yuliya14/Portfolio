import React from 'react';
import style from './GetContact.module.scss'

type GetContactPropsType = {
    icon: string
    title: string
}
export const GetContact = (props: GetContactPropsType) => {
    return (
        <div className={style.getContact}>
            <img  className = {style.image} src = {props.icon}/>
            <span>{props.title}</span>
        </div>
    )
}