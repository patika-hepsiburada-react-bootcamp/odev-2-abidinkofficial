import styles from "./WrongLetter.module.css"

// Component for displaying wrong entered letters
const WrongLetter = ({ letter }) => {
  return (
    <div className={styles.WrongLetter}>
      {letter}
    </div>
  )
}

export default WrongLetter