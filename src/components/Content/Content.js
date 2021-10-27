import React from 'react'
import styles from './Content.module.scss'

export const Content = () => {
    return (
        <div className={styles.Everything}>
            <div className={styles.Content}>
                <div className={styles.Box}>
                    <div className={styles.Pic}>
                        <img src="./img/pic3.jpg" alt="first pic"/>
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
                        <img src="./img/pic2.jpg" alt="second pic"/>
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
