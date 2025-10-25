import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { setType } from '../../../slicers/quizSetting/quizSettingSlice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../../store/store'

export const Type = () => {
  const dispatch = useDispatch<AppDispatch>()

  const arrType = ['Multiple choise', 'True/False']
  const arrValue = ['multiple', 'boolean']

  const handleType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(event.target.value))
  }

  return (
    <>
      <FlexBox flexDirection='column'>
        <h3>Type</h3>
        <select defaultValue='' onChange={handleType}>
          <option value=''>Any type</option>
          {arrType.map((el: string, index: number) => (
            <option key={el} value={arrValue[index]}>
              {el}
            </option>
          ))}
        </select>
      </FlexBox>
    </>
  )
}
