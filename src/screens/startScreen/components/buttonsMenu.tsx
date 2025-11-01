import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../../store/store'
import {
  resetPersistStatistic,
  setCategoryQuestion,
  setDifficultQuestion,
  setTypeQuestion
} from '../../../slicers/statistic/persistQuizStatistic'
import {
  selectQuizConfigAmount,
  selectQuizConfigCategory,
  selectQuizConfigDifficulty,
  selectQuizConfigType
} from '../../../slicers/quizSetting/quizSettingSlice'
import { motion } from 'motion/react'

const StyledFlexBox = styled(FlexBox)`
  margin: 30px;
`
export const ButtonsMenu = () => {
  const navigate = useNavigate()
  const difficult = useSelector(selectQuizConfigDifficulty)
  const ammountQuestions = useSelector(selectQuizConfigAmount)
  const type = useSelector(selectQuizConfigType)
  const category = useSelector(selectQuizConfigCategory)
  const dispatch = useDispatch<AppDispatch>()

  const handleStart = () => {
    navigate('/main')

    if (difficult) {
      dispatch(
        setDifficultQuestion({
          difficult: difficult,
          amount: ammountQuestions
        })
      )
    }
    if (type) {
      dispatch(
        setTypeQuestion({
          type: type,
          amount: ammountQuestions
        })
      )
    }
    if (category) {
      dispatch(
        setCategoryQuestion({
          name: category.name,
          amount: ammountQuestions
        })
      )
    }
  }

  const handleStat = () => {
    navigate('/stat')
  }

  const resetStats = () => {
    dispatch(resetPersistStatistic())
  }

  return (
    <>
      <StyledFlexBox gap='16px' justifyContent='center'>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={handleStart}>
          Start quiz
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={handleStat}>
          See my stats
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={resetStats}>
          Reset statistic
        </motion.button>
      </StyledFlexBox>
    </>
  )
}
