export const isLetter = (text) => {
  return (text.length === 1 && text.match(/[a-z]/i)) ? true : false
}