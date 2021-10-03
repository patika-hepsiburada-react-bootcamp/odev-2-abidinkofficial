import "./Button.module.css"

// Generic button component
const Button = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button