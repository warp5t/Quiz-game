import styles from './wrongAnswer.module.css'

export const wrongAnswerAnimation = () => {
  const rootElement = document.documentElement

  let isRed = false
  const intervalAnimation = setInterval(() => {
    if (isRed) {
      rootElement.classList.remove(styles.backgroundRed)
    } else {
      rootElement.classList.add(styles.backgroundRed)
    }
    isRed = !isRed
  }, 100)

  setTimeout(() => {
    clearInterval(intervalAnimation)
    rootElement.classList.remove(styles.backgroundRed)
  }, 1000)
}
