import "./Button.module.css"

const Button = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button