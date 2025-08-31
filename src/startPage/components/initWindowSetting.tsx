import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox.styles'
import { Categories } from './categories'

export const InitWindowSettings = () => {
  return (
    <>
      <FlexBox $flexDirection='column'>
        <Categories />
      </FlexBox>
    </>
  )
}
