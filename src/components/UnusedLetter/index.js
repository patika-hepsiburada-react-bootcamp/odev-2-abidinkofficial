import styles from "./UnusedLetter.module.css"

const UnusedLetter = ({ letter }) => {
  return (
    <div className={styles.UnusedLetter}>
      {letter}
    </div>
  )
}

export default UnusedLetter