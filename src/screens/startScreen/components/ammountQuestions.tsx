import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { setAmount } from '../../../slicers/quizSetting/quizSettingSlice'
import type { AppDispatch } from '../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import { motion } from 'motion/react'

export const AmmountQuestions = () => {
  const dispatch = useDispatch<AppDispatch>()

  const amount = useSelector((state: RootState) => state.quiz.config.amount)

  const increment = () => {
    if (amount < 15) dispatch(setAmount(amount + 1))
  }

  const decrement = () => {
    if (amount >= 2) dispatch(setAmount(amount - 1))
  }

  return (
    <FlexBox flexDirection='column'>
      <h3>Number of Questions</h3>
      <div>{amount}</div>
      <FlexBox gap='16px' justifyContent='center'>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={decrement}>
          Decrement
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={increment}>
          Increment
        </motion.button>
      </FlexBox>
    </FlexBox>
  )
}
