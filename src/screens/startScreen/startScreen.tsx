import { AmmountQuestions } from './components/ammountQuestions'
import { Categories } from './components/categories'
import { Difficulty } from './components/difficulty'
import { Time } from './components/time'
import { ButtonsMenu } from './components/buttonsMenu'
import { Type } from './components/type'

export const StartScreen = () => {
  return (
    <>
      <AmmountQuestions />
      <Categories />
      <Difficulty />
      <Type />
      <Time />
      <ButtonsMenu />
    </>
  )
}
