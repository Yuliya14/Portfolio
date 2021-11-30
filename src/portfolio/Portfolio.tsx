import React from 'react'
import style from './Portfolio.module.css'
import { ExampleWork } from './exempleWork/ExampleWork';
import {Title} from "../common/component/Title";
import socialNetwork from '../assets/socialnetwork.png'
import todolist from '../assets/todolist.jpg'
import weather from '../assets/weather3.png'

export const Portfolio = () => {
    return (
        <section className={style.sectionColorBG}>
            <div className={style.portfolioContainer}>
                <div className={style.portfolioContent}>
                    <Title title={"My Portfolio"}/>
                    <p className={style.portfolioDescription}>I create & build beautifully simple user interfaces, and I love what I do</p>
                </div>
                <div className={style.portfolioFilter}>
                    <div className={style.exampleContent}>
                        <ExampleWork name={"Social Network"} description={"Social Network"} img={socialNetwork}/>
                        <ExampleWork name={"Todo List"} description={"Todo List"} img={todolist}/>
                        <ExampleWork name={"Weather"} description={"Weather"} img={weather}/>
                    </div>
                </div>
            </div>
        </section>

    )
}