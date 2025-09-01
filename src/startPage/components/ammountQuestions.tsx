import { useState } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'

export const AmmountQuestions = () => {
  const [ammount, setAmmount] = useState(1)

  const increment = () => {
    if (ammount < 15) setAmmount(() => ammount + 1)
  }

  const decremement = () => {
    if (ammount >= 2) setAmmount(() => ammount - 1)
  }

  return (
    <FlexBox flexDirection='column'>
      <h3>Number of Questions</h3>
      <div>{ammount}</div>
      <FlexBox gap='15px'>
        <button onClick={decremement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </FlexBox>
    </FlexBox>
  )
}
