import { StyledDivModal } from '../../../reusalbleComponents/Modal/Modal.styles'
import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'

interface ModalQuitProps {
  onCancel: () => void
  onConfirm: () => void
}

export const ModalQuit = ({ onCancel, onConfirm }: ModalQuitProps) => {
  return (
    <StyledDivModal>
      <FlexBox>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </FlexBox>
    </StyledDivModal>
  )
}
