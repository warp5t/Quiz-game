import { StyledDivModal } from '../../../reusalbleComponents/Modal/Modal.styles'
import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { motion, AnimatePresence } from 'motion/react'

interface ModalQuitProps {
  onCancel: () => void
  onConfirm: () => void
  isOpen: boolean
}

export const ModalQuit = ({ onCancel, onConfirm, isOpen }: ModalQuitProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledDivModal>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <FlexBox>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onConfirm}>
                Confirm
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onCancel}>
                Cancel
              </motion.button>
            </FlexBox>
          </motion.div>
        </StyledDivModal>
      )}
    </AnimatePresence>
  )
}
