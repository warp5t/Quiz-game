import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { useCapitalize } from '../../../utils/capitalizer'
import { setDifficulty } from '../../../slicers/quizSetting/quizSettingSlice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../../store/store'

export const Difficulty = () => {
  const dispatch = useDispatch<AppDispatch>()

  const arrDifficult = ['easy', 'medium', 'hard']

  const handleDifficult = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('event.target.value: ', event.target.value)
    dispatch(setDifficulty(event.target.value))
  }

  return (
    <>
      <FlexBox flexDirection='column'>
        <h3>Difficulty</h3>
        <select defaultValue='' onChange={handleDifficult}>
          <option value=''>Any type</option>
          {arrDifficult.map((el: string) => (
            <option key={el} value={el}>
              {useCapitalize(el)}
            </option>
          ))}
        </select>
      </FlexBox>
    </>
  )
}
