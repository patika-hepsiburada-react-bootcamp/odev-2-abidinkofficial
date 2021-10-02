import styles from "./HangedMan.module.css"

const HangedMan = ({ wrong = 0 }) => {
  return (
    <div className={styles["HangedMan"]}>
      {`Wrong: ${wrong}`}
    </div>
  )
}

export default HangedMan