import styles from "./Letter.module.css"

const Letter = ({ letter = null }) => {
  return (
    <div className={styles["Letter"]}>
      {letter ? letter : "A"}
    </div>
  )
}

export default Letter