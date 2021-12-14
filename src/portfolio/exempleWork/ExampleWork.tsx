import React from 'react'
import style from './ExampleWork.module.scss'

export type ExampleWorkPropsType = {
    name: string
    description: string
    img: string
}
export const ExampleWork = (props: ExampleWorkPropsType) => {
    return (
        <div className={style.example}>
            <div className={style.exampleBox}>
                <div className={style.exampleImg}>
                    <div className={style.exampleInfo}>
                        <h5>{props.name}</h5>
                        <span>{props.description}</span>
                    </div>
                    <a className={style.galleryLink} href="#" title="click me">
                        <img className={style.image} src={props.img}/>
                    </a>
                </div>
            </div>
        </div>
    )
}