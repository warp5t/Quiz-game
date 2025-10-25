import { useSelector } from 'react-redux'
import {
  selectCategories,
  selectCorrectOverall,
  selectDifficulty,
  selectQuestionsOverall,
  selectType
} from '../../slicers/statistic/persistQuizStatistic'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'

export const StatisticScreen = () => {
  const rightAnsersAmmout = useSelector(selectCorrectOverall)
  const overallAmmout = useSelector(selectQuestionsOverall)
  const categoy = useSelector(selectCategories)
  const difficult = useSelector(selectDifficulty)
  const type = useSelector(selectType)
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
    </>
  )
}
