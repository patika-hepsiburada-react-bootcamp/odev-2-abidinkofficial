// Function that finds whether the entered text is a valid letter or not.
export const isLetter = (text) => {
  return (text.length === 1 && text.match(/[a-z]/i)) ? true : false
}