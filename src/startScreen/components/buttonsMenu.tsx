import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledFlexBox = styled(FlexBox)`
  margin: 30px;
`
export const ButtonsMenu = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/main')
  }

  return (
    <>
      <StyledFlexBox gap='16px' justifyContent='center'>
        <button onClick={handleStart}>Start quiz</button>
        <button>See my stats</button>
      </StyledFlexBox>
    </>
  )
}
