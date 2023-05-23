import { useState } from "react"
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.user_info}>
                <div className={styles.user_profile_image}>
                    <img src="http://placekitten.com/150/150" alt="Profile" />
                </div>
                <div className={styles.user_description}>
                    <h1 className={styles.user_name}>Hello</h1>
                    <p className={styles.current_list_amount}>0 on the task manager</p></div>
            </div>
            <ul className={styles.category_list}>
                <li>Easy</li>
                <li>Medium</li>
                <li>Hard</li>
            </ul>
        </header>
    )
}
