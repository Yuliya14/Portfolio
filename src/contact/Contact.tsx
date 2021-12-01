import React from 'react';
import style from './Contact.module.css'

export const Contact = () => {
    return (
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.rowAlignItemsCenter}>
                    <div className={style.colMy3}>
                        <div className={style.contactForm}>
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
                    </div>
                    <div className={style.colMyAuto3}>
                        <div className={style.contactInfo}>
                            <div className={style.title}>
                                <h4 className={style.fontAlt}>Get in touch</h4>
                                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                            </div>
                            <div className={style.media}>
                                <div className={style.icon}>
                                    <i className={style.tiMap}></i>
                                </div>
                                <span className={style.mediaBody}>
                                    Minsk,<br/>
                                    Belarus
                                </span>
                            </div>
                            <div className={style.media}>
                                <div className={style.icon}>
                                    <i className={style.tiEmail}></i>
                                </div>
                                <span className={style.mediaBody}>
                                   julia1997.04.14@mail.ru
                                </span>
                            </div>
                            <div className={style.media}>
                                <div className={style.icon}>
                                    <i className={style.tiMobile}></i>
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
      /*  <div className={style.contact}>

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

        </div>*/
    )
}