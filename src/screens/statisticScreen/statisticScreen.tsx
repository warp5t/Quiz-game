import { useSelector } from 'react-redux'
import {
  selectCategories,
  selectCorrectOverall,
  selectDifficulty,
  selectQuestionsOverall,
  selectType
} from '../../slicers/statistic/persistQuizStatistic'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const StatisticScreen = () => {
  const rightAnsersAmmout = useSelector(selectCorrectOverall)
  const overallAmmout = useSelector(selectQuestionsOverall)
  const categoy = useSelector(selectCategories)
  const difficult = useSelector(selectDifficulty)
  const type = useSelector(selectType)
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/start')
  }
  return (
    <>
      <h3>Statistic</h3>
      <div>Right answers: {rightAnsersAmmout}</div>
      <div>Overall answers: {overallAmmout}</div>
      <div>Сategories</div>
      {categoy.map((el) => (
        <FlexBox gap='15px'>
          <div key={el.name}>{el.name} :</div>
          <div>{el.amount}</div>
        </FlexBox>
      ))}
      <div>Difficulty</div>
      {difficult.map((el) => (
        <FlexBox gap='15px'>
          <div key={el.difficult}>{el.difficult} :</div>
          <div>{el.amount}</div>
        </FlexBox>
      ))}
      <div>Type</div>
      {type.map((el) => (
        <FlexBox gap='15px'>
          <div key={el.type}>{el.type} :</div>
          <div>{el.amount}</div>
        </FlexBox>
      ))}
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={handleStart}>
        {' '}
        Main menu{' '}
      </motion.button>
    </>
  )
}
