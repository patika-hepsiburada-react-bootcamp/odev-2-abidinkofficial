import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import Letter from "../../components/Letter"
import HangedMan from "../../components/HangedMan"

import words from "../../data/words"
import { isLetter } from "../../utils"

const Home = () => {
  const [randomWord, setRandomWord] = useState("")

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    setRandomWord(words[Math.floor(Math.random() * 10)])
  }, [])

  const handleKeyPress = (event) => {
    const input = event.key.toLowerCase()
    isLetter(input) && console.log(input)
  } 

  return (
    <div className={styles["Home"]}>
      <header>
        <h1>birey asmaca</h1>
      </header>
      <div className={styles["game"]}>
        <div className={styles["game-word"]}>
          {
            randomWord.split("").map((letter, i) => <Letter key={i} letter={letter} />)
          }
        </div>
        <div className={styles["game-hanged"]}>
          <HangedMan />
        </div>
      </div>
      <footer>
        2021 - Bazı hakları saklı olabilir?
      </footer>
    </div>
  )
}

export default Home