import styles from "./Letter.module.css"

// Main letter component
const Letter = ({ letter = null }) => {
  return (
    <div className={styles["Letter"]}>
      {letter ? letter : "_"}
    </div>
  )
}

export default Letter