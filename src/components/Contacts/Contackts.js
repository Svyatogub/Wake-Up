import React from 'react'
import styles from './Contacts.module.scss'

export const Contackts = () => {
    return (
        <div className={styles.Contackts}>
            <div className={styles.Container}>
                <a href="https://www.linkedin.com/in/svyatogub-zemlyanichkin-498763224/">
                    <img src="./img/linkedin-in-brands.svg" alt="linkedin"/>
                </a>
                <a href="https://github.com/Svyatogub">
                    <img src="./img/github-brands.svg" alt="github"/>
                </a>
                <a href="https://www.instagram.com/svyatogubzemlyanichkeen/">
                    <img src="./img/instagram-brands.svg" alt="insta"/>
                </a>
                <a href="https://t.me/svyatogub">
                    <img src="./img/telegram-plane-brands.svg" alt="telegramm"/>
                </a>
                <hr />
                <h4>svyatogybzemlyanichkeen@gmail.com</h4>
            </div>
        </div>
    )
}
