import React from 'react'
import styles from './Content.module.scss'
import logo1 from '../img/pic1.jpeg'
import logo2 from '../img/pic2.jpg'

export const Content = () => {
    return (
        <div className={styles.Everything}>
            <div className={styles.Content}>
                <div className={styles.Box}>
                    <div className={styles.Pic}>
                        <img src={logo1} alt="first pic"/>
                    </div>
                    <div className={styles.InfoBox}>
                        <div className={styles.Info}>
                            <h2>About me</h2>
                            <p>I am a higly focused, fast learning, competetive and obsessed with improving myself, self tought programmer.
                                I know how to deal with stracefull situations and work under preassure.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.Pic}>
                        <img src={logo2} alt="second pic"/>
                    </div>
                    <div className={styles.InfoBox}>
                        <div className={styles.Info}>
                            <h2>My skills</h2>
                            <p>I've done multiple projects using HTML, JS, CSS, SCSS, React, Node JS, GiT.
                                My English level is Advanced, and i used to work as a tour giude in Chornobyl so i have a lot of experience speaking with foreigners from UK, USA, and different European countries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
