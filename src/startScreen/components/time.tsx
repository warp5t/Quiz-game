import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { setTime } from '../../slicers/quizSetting/quizSettingSlice'
import type { AppDispatch } from '../../store/store'
import { useDispatch } from 'react-redux'

export const Time = () => {
  const dispatch = useDispatch<AppDispatch>()
  const arrTime = [1, 2, 5]

  const handleTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const time = Number(event.target.value)
    dispatch(setTime(time))
  }

  return (
    <>
      <FlexBox flexDirection='column'>
        <h3>Time</h3>
        <select onChange={handleTime}>
          {arrTime.map((el: number) => (
            <option key={el} value={el}>
              {el}min
            </option>
          ))}
        </select>
      </FlexBox>
    </>
  )
}
