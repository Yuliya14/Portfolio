import React from 'react'
import style from './ExampleWork.module.css'

export type ExampleWorkPropsType = {
    name: string
    description: string
    img: string
}
export const ExampleWork = (props: ExampleWorkPropsType) => {
    return (
        <div className={style.exampleWorkBlock}>
            <a href = "#" title="click me">
                <img className={style.image} src={props.img}/>
            </a>
            <span>{props.name}</span>
            <p>{props.description}</p>
        </div>
    )
}