import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import styled from 'styled-components'

const StyledFlexBox = styled(FlexBox)`
  margin: 30px;
`
export const ButtonsMenu = () => {
  return (
    <>
      <StyledFlexBox gap='16px' justifyContent='center'>
        <button>Start quiz</button>
        <button>See my stats</button>
      </StyledFlexBox>
    </>
  )
}
