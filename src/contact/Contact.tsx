import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {GetContact} from "./getContact/GetContact";
import {Title} from "../common/component/Title";

export const Contact = () => {
    return (
        <div className={style.contact}>

            <div className={`${styleContainer.container} ${style.containerContact}`}>
                <div className={style.contactTitle}>
                    <Title title={"My contact"}/>
                    <h3>GET IN TOUCH</h3>
                </div>
                <div className={style.contactBlock}>
                    <div className={style.contactContact}>
                        <GetContact icon={"https://icon-library.com/images/icon-for-address/icon-for-address-5.jpg"}
                                    title={"Minsk, RB"}/>
                        <GetContact icon={"https://cdn-icons-png.flaticon.com/512/455/455705.png"}
                                    title={"+375(33)-111"}/>
                        <GetContact icon={"https://cdn-icons-png.flaticon.com/128/542/542689.png"}
                                    title={"xxxxx@mail.ru"}/>
                        <GetContact icon={"https://cdn-icons-png.flaticon.com/128/2111/2111708.png"}
                                    title={"Telegram"}/>
                        <GetContact icon={"https://cdn-icons-png.flaticon.com/128/2111/2111757.png"} title={"Viber"}/>
                    </div>
                    <div className={style.contactSendForm}>
                        <form className={style.contactForm}>
                                <input className={style.input} placeholder={"Name"}/>
                                <input className={style.input} placeholder={"Email"}/>
                                <input className={style.input} placeholder={"Message"}/>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>)
}