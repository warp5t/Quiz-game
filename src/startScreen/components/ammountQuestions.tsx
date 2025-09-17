import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { setAmount } from '../../slicers/quizSetting/quizSettingSlice'
import type { AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

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
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </FlexBox>
    </FlexBox>
  )
}
