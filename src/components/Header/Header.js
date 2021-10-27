import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.Header}>
            <div calassName={styles.Container}>
                <h1 className={styles.Message}>Wake Up Neo!</h1>
            </div>
        </div>
    )
}
