import styles from "./HangedMan.module.css"
import hang0 from "../../assets/hang-0.png"
import hang1 from "../../assets/hang-1.png"
import hang2 from "../../assets/hang-2.png"
import hang3 from "../../assets/hang-3.png"
import hang4 from "../../assets/hang-4.png"
import hang5 from "../../assets/hang-5.png"

const hangmans = [hang0, hang1, hang2, hang3, hang4, hang5]

// Hangman figure, changing with wrong answers
const HangedMan = ({ wrong = 0 }) => {
  return (
    <div className={styles["HangedMan"]}>
      <img src={hangmans[wrong]} alt="hangman" />
    </div>
  )
}

export default HangedMan