import { useState } from "react"
import styles from "./Body.module.css"
import { Icon } from '@iconify/react';

export const Body = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            bookmarked: false,
            taskName: "Task 1",
            taskTime: "11:11",
            taskDescription: "Hello this is task 1",
        },
        {
            id: 2,
            bookmarked: true,
            taskName: "Task 2",
            taskTime: "11:11",
            taskDescription: "Hello this is task 2",
        },
        {
            id: 3,
            bookmarked: false,
            taskName: "Task 3",
            taskTime: "11:11",
            taskDescription: "Hello this is task 3",
        },
        {
            id: 4,
            bookmarked: true,
            taskName: "Task 4",
            taskTime: "11:11",
            taskDescription: "Hello this is task 4",
        }
    ])

    console.log("rendered")

    const handleBookmarkClick = (id) => {
        setTaskList(prevTaskList => {
            return prevTaskList.map(task => {
                return (task.id === id ? { ...task, bookmarked: !task.bookmarked } : { ...task })
            })
        })
    }

    const newBookmarkedListElement = taskList.map((item, index) => {
        return (
            item.bookmarked
                ? <div
                    key={index}
                    className={styles.task_card}>
                    <div className={styles.bookmark_icon_container}>
                        <button
                            onClick={() => handleBookmarkClick(item.id)}
                            className={`${styles.bookmark_icon}`}
                        >
                            <Icon width="32px" icon="material-symbols:bookmark" />
                        </button>
                    </div>
                    <div className={styles.task_card_details}>
                        <div className={styles.task_card_deatails_header}>
                            <h2 className={styles.details_header_name}>{item.taskName}</h2>
                            <span className={styles.details_header_time}>{item.taskTime}</span>
                        </div>
                        <div className={styles.task_card_description}>
                            <p>{item.taskDescription}</p>
                        </div>
                    </div>
                    <div className={styles.x_icon_container}>
                        <button className={styles.x_icon}>
                            <Icon icon="ph:x-bold" />
                        </button>
                    </div>
                </div>
                : ""
        )
    })

    const newTaskListElement = taskList.map((item, index) => {
        return (
            !item.bookmarked
                ?
                <div
                    key={index}
                    className={styles.task_card}>
                    <div className={styles.bookmark_icon_container}>
                        <button
                            onClick={() => handleBookmarkClick(item.id)}
                            className={`${styles.bookmark_icon}`}
                        >
                            <Icon width="32px" icon="material-symbols:bookmark-outline" />
                        </button>
                    </div>
                    <div className={styles.task_card_details}>
                        <div className={styles.task_card_deatails_header}>
                            <h2 className={styles.details_header_name}>{item.taskName}</h2>
                            <span className={styles.details_header_time}>{item.taskTime}</span>
                        </div>
                        <div className={styles.task_card_description}>
                            <p>{item.taskDescription}</p>
                        </div>
                    </div>
                    <div className={styles.x_icon_container}>
                        <button className={styles.x_icon}>
                            <Icon icon="ph:x-bold" />
                        </button>
                    </div>
                </div>
                : ""
        )
    })

    return (
        <div className={styles.main_body_container}>
            <div className={styles.task_card_list + " " + styles.task_bookmarked}>
                <h2 className={styles.task_label}>Bookmarked</h2>
                {newBookmarkedListElement}
            </div>
            <div className={styles.task_card_list}>
                <h2 className={styles.task_label}>Task List</h2>
                {newTaskListElement}
            </div>
        </div>
    )
}
