import { useRef } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'

export const Time = () => {
  const selectRef = useRef(null)

  const arrTime = [1, 2, 5]

  return (
    <>
      <FlexBox flexDirection='column'>
        <h3>Time</h3>
        <select ref={selectRef} defaultValue={1}>
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
