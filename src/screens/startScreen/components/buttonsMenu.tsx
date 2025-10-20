import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../store/store'
import { setDifficultQuestions } from '../../../slicers/statistic/persistQuizStatistic'

const StyledFlexBox = styled(FlexBox)`
  margin: 30px;
`
export const ButtonsMenu = () => {
  const navigate = useNavigate()
  const difficult = useSelector((state: RootState) => state.quiz.config.difficulty)
  const dispatch = useDispatch<AppDispatch>()
  const ammountQuestions = useSelector((state: RootState) => state.quiz.config.amount)

  const handleStart = () => {
    navigate('/main')

    if (difficult) {
      console.log('set difficult')

      dispatch(
        setDifficultQuestions({
          difficult: difficult,
          amount: ammountQuestions
        })
      )
    }
  }

  const handleStat = () => {
    navigate('/stat')
  }

  return (
    <>
      <StyledFlexBox gap='16px' justifyContent='center'>
        <button onClick={handleStart}>Start quiz</button>
        <button onClick={handleStat}>See my stats</button>
      </StyledFlexBox>
    </>
  )
}
