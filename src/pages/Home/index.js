import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import Letter from "../../components/Letter"
import HangedMan from "../../components/HangedMan"
import logo from "../../assets/hangman-logo-200-w.png"

import words from "../../data/words"
import { isLetter } from "../../utils"

const Home = () => {
  const [randomWord, setRandomWord] = useState("")
  const [inputLetter, setInputLetter] = useState(null)
  const [inputArr, setInputArr] = useState([])
  const [displayArr, setDisplayArr] = useState([])
  const [win, setWin] = useState(false)
  const [wrong, setWrong] = useState(0)
  const [lose, setLose] = useState(false)
  console.log(inputArr)

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, true)
    setRandomWord(words[Math.floor(Math.random() * 10)])
  }, [])

  useEffect(() => {
    setDisplayArr(() => [ ...randomWord.split("").map((letter, i) => "_")] )
  }, [randomWord])

  useEffect(() => {
    setDisplayArr(() => randomWord.split("").map((letter, i) => {
      if (inputArr.includes(letter)) {
        return letter
      } else {
        return "_"
      }
    }))
    // eslint-disable-next-line
  }, [inputArr])

  useEffect(() => {
    if (inputLetter && !inputArr.includes(inputLetter) && wrong < 5 && !win) {
      setInputArr((arr) => [...arr, inputLetter])
      if (!randomWord.split("").includes(inputLetter)) {
        setWrong((w) => w + 1)
      }
    }
    // eslint-disable-next-line
  }, [inputLetter])

  useEffect(() => {
    if (displayArr.join("") === randomWord && !!randomWord) {
      setWin(true)
    }
    // eslint-disable-next-line
  }, [displayArr])

  useEffect(() => {
    if (wrong >= 5) {
      setLose(true)
    }
  }, [wrong])

  const handleKeyPress = (event) => {
    let input = event.key.toLowerCase()
    isLetter(input) && setInputLetter(input)
  }

  const reload = () => {
    setRandomWord(words[Math.floor(Math.random() * 10)])
    setInputLetter(null)
    setInputArr([])
    setDisplayArr([])
    setWin(false)
    setLose(false)
    setWrong(0)
  }

  return (
    <div className={styles["Home"]}>
      <header>
        <img src={logo} alt="hang react" />
        <h1>birey asmaca</h1>
      </header>
      <div className={styles["game"]}>
        <div className={styles["game-word"]}>
          {
            displayArr.map((letter, i) => <Letter key={i} letter={letter} />)
          }
          {win && <button type="button" onClick={reload}>Yeni oyun</button>}
          {lose && <button type="button" onClick={reload}>Yeniden dene</button>}
        </div>
        <div className={styles["game-hanged"]}>
          <HangedMan wrong={wrong} />
        </div>
      </div>
      <footer>
        2021 - Bazı hakları saklı olabilir?
      </footer>
    </div>
  )
}

export default Home