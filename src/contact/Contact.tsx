import React from 'react';
import style from './Contact.module.scss'
import place from '../assets/place.png'
import eMail from '../assets/mail.png'
import phone from '../assets/phone.png'

export const Contact = () => {
    return (
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.rowAlignItemsCenter}>
                    <div className={style.colMy3}>
                            <div className={style.title}>
                                <h4 className={style.fontAlt}>Contact us</h4>
                            </div>
                            <form className={style.contactForm}>
                                <div className={style.row}>
                                    <div className={style.colMd6}>
                                        <div className={style.formGroup}>
                                            <input type = "text" className={style.formControl}
                                            placeholder={"Name"}/>
                                        </div>
                                    </div>
                                    <div className={style.colMd6}>
                                        <div className={style.formGroup}>
                                            <input type = "email" className={style.formControl}
                                            placeholder={"Email"} />
                                        </div>
                                    </div>
                                    <div className={style.col12}>
                                        <div className={style.formGroup}>
                                            <input type = "text" className={style.formControl}
                                                   placeholder={"Subject"}/>
                                        </div>
                                    </div>
                                    <div className={style.col12}>
                                        <div className={style.formGroup}>
                                            <textarea rows= {4} className={style.formControl}
                                                   placeholder={"Type comment"}/>
                                        </div>
                                    </div>
                                    <div className={style.col12}>
                                        <div className={style.btnBar}>
                                          <button className={style.btnTheme}>Send your message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    </div>
                    <div className={style.colMyAuto3}>
                        <div className={style.contactInfo}>
                            <div className={style.title}>
                                <h4 className={style.fontAlt}>Get in touch</h4>
                                <p>Always available for freelancing if the right project comes along, <br/> Feel free to contact me.</p>
                            </div>
                            <div className={style.media}>
                                <div className={style.icon}><img src = {place}/>
                                </div>
                                <span className={style.mediaBody}>
                                    Minsk, Belarus
                                </span>
                            </div>
                            <div className={style.media}>
                                <div className={style.icon}><img src = {eMail}/>
                                </div>
                                <span className={style.mediaBody}>
                                   julia1997.04.14@mail.ru
                                </span>
                            </div>
                            <div className={style.media}>
                                <div className={style.icon}><img src = {phone}/>
                                </div>
                                <span className={style.mediaBody}>
                                   +375(33)304-11-66
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}