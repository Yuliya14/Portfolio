import React from 'react'
import style from './Portfolio.module.scss'
import { ExampleWork } from './exempleWork/ExampleWork';
import {Title} from "../common/component/Title";
import socialNetwork from '../assets/socialnetwork.png'
import todolist from '../assets/todolist.jpg'
import weather from '../assets/weather3.png'

export const Portfolio = () => {
    return (
        <section className={style.sectionColorBG}>
            <div className={style.container}>
                <div className={style.portfolioContent}>
                    <Title title={"My Portfolio"}/>
                    <p className={style.portfolioDescription}>I am a beginner front-end developer with a lot of enthusiasm and a successful specialist in this field. I create & build simple user interfaces, and I love what I do</p>
                </div>
                <div className={style.portfolioFilter}>
                    <div className={style.exampleContent}>
                        <ExampleWork name={"Social Network"} description={"Online platform for communication and finding friends"} img={socialNetwork}/>
                        <ExampleWork name={"Todo List"} description={"Your time manager"} img={todolist}/>
                        <ExampleWork name={"Weather"} description={"Weather tracker for any part of the world"} img={weather}/>
                    </div>
                </div>
            </div>
        </section>

    )
}