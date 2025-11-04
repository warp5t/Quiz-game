import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
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
import styles from './statisticScreen.module.css'

export const StatisticScreen = () => {
  const rightAnsersAmmout = useSelector(selectCorrectOverall)
  const overallAmmout = useSelector(selectQuestionsOverall)
  const categoy = useSelector(selectCategories)
  const difficult = useSelector(selectDifficulty)
  const type = useSelector(selectType)
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const handleMenu = searchParams.get('menu') === 'true'

  const handleStart = () => {
    navigate('/start')
  }

  return (
    <FlexBox flexDirection='column' alignItems='center'>
      <h3>Statistic</h3>
      <div>Right answers: {rightAnsersAmmout}</div>
      <div>Overall answers: {overallAmmout}</div>
      <h4>Сategories</h4>
      {categoy.map((el) => (
        <FlexBox gap='15px'>
          <div key={el.name}>{el.name} :</div>
          <div>{el.amount}</div>
        </FlexBox>
      ))}
      <h4>Difficulty</h4>
      {difficult.map((el) => (
        <FlexBox gap='15px'>
          <div key={el.difficult}>{el.difficult} :</div>
          <div>{el.amount}</div>
        </FlexBox>
      ))}
      <h4>Type</h4>
      {type.map((el) => (
        <FlexBox gap='15px'>
          <div key={el.type}>{el.type} :</div>
          <div>{el.amount}</div>
        </FlexBox>
      ))}
      <FlexBox className={styles.statisticWrap}>
        {handleMenu && (
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={handleStart}>
            Main menu
          </motion.button>
        )}
      </FlexBox>
    </FlexBox>
  )
}
