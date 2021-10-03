// Home: all the logic and components of the game can be found here.

import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import Letter from "../../components/Letter"
import HangedMan from "../../components/HangedMan"
import logo from "../../assets/hangman-logo-200-w.png"
import Button from "../../components/Button"
import WrongLetter from "../../components/WrongLetter"

import words from "../../data/words"
import { isLetter } from "../../utils"

const Home = () => {
  const [randomWord, setRandomWord] = useState("") // Word the user needs to find
  const [inputLetter, setInputLetter] = useState(null) // Captured letter from keyboard
  const [inputArr, setInputArr] = useState([]) // An array of captured letters
  const [displayArr, setDisplayArr] = useState([]) // Hidden and/or found letters to display to the user
  const [win, setWin] = useState(false) // Winning state
  const [wrong, setWrong] = useState(0) // Wrong answer count
  const [lose, setLose] = useState(false) // Losing state
  const [wrongLetters, setWrongLetters] = useState([]) // Entered wrong letters array for display to the user

  // Initial hook, adding a listener and selecting a random word from the array.
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, true)
    setRandomWord(words[Math.floor(Math.random() * 10)])
  }, [])

  // Setting the display letters based on the random word.
  useEffect(() => {
    setDisplayArr(() => [...randomWord.split("").map((letter, i) => "_")])
  }, [randomWord])

  // Manipulating the display letters based on the array of entered letters.
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

  // Manipulating the array of entered letters and counting the wrong answers.
  useEffect(() => {
    if (inputLetter && !inputArr.includes(inputLetter) && wrong < 5 && !win) {
      setInputArr((arr) => [...arr, inputLetter])
      if (!randomWord.split("").includes(inputLetter)) {
        setWrong((w) => w + 1)
        setWrongLetters((arr) => [...arr, inputLetter])
      }
    }
    // eslint-disable-next-line
  }, [inputLetter])

  // Tracking the win status
  useEffect(() => {
    if (displayArr.join("") === randomWord && !!randomWord) {
      setWin(true)
    }
    // eslint-disable-next-line
  }, [displayArr])

  // Tracking the lose status
  useEffect(() => {
    if (wrong >= 5) {
      setLose(true)
    }
  }, [wrong])

  // Event listener function for capturing letters from the keyboard
  const handleKeyPress = (event) => {
    let input = event.key.toLowerCase()
    isLetter(input) && setInputLetter(input)
  }

  // Reload function for both win & lose
  const reload = () => {
    setRandomWord(words[Math.floor(Math.random() * 10)])
    setInputLetter(null)
    setInputArr([])
    setDisplayArr([])
    setWin(false)
    setLose(false)
    setWrong(0)
    setWrongLetters([])
  }

  return (
    <div className={styles["Home"]}>
      <header>
        <img src={logo} alt="hang react" />
        <h1>birey asmaca</h1>
      </header>
      <div className={styles["game"]}>
        <div className={styles["game-word"]}>
          <span>(Klavye ile giriş yapabilirsin.)</span>
          <div>
            {
              displayArr.map((letter, i) => <Letter key={i} letter={letter} />)
            }
          </div>
          {
            wrongLetters.length > 0 &&
            <div className={styles.WrongLetters}>
              <h4>Kullanılan hatalı harfler:</h4>
              <div>{wrongLetters.map((letter) => <WrongLetter letter={letter} key={letter} />)}</div>
            </div>
          }
          {win && <p>Kazandın!</p>}
          {win && <Button label="Yeni oyun" onClick={reload} />}
          {lose && <p>Kaybettin, cevap: {randomWord}</p>}
          {lose && <Button label="Yeniden dene" onClick={reload} />}
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