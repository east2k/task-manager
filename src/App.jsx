import { useState } from "react"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body";

export const App = () => {
  console.log("Home Rendered I MENA APP");
  return (
    <main className={styles.main_container}>
      <Header />
      <Body />
    </main>
  )
}
