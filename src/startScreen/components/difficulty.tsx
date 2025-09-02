import { useRef } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { useCapitalize } from '../../utils/capitalizer'

export const Difficulty = () => {
  const selectRef = useRef(null)
  // const [difficult, setDifficult] = useState(null)
  const arrDifficult = ['easy', 'medium', 'hard']

  return (
    <>
      <FlexBox flexDirection='column'>
        <h3>Difficulty</h3>
        <select ref={selectRef} defaultValue=''>
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
