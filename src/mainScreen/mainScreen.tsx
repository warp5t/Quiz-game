import { createPortal } from 'react-dom'
import { FlexBox } from '../reusalbleComponents/FlexBox/FlexBox'
import { Timer } from './components/timer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledDivModal } from '../reusalbleComponents/Modal/Modal.styles'

const arrQuestion = [
  'What was the name of the German offensive operation in October 1941 to take Moscow before winter?',
  'What does the Prt Sc button do?',
  'The Battle of Hastings was fought in which year?',
  'Which of the following is not the host of a program on NPR?',
  'What was the name of the hip hop group Kanye West was a member of in the late 90s?'
]

const currentQuestion = 1
const ammaountQuestion = 6

const typeQuestion = 'boolean'

export const arrAnswer = ['a', 'b', 'c', 'd']

interface ModalQuitProps {
  onCancel: () => void
  onConfirm: () => void
}

const ModalQuit = ({ onCancel, onConfirm }: ModalQuitProps) => {
  return (
    <StyledDivModal>
      <FlexBox>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </FlexBox>
    </StyledDivModal>
  )
}

export const MainScreen = () => {
  const modalRoot = document.getElementById('modalQiut')
  const [portal, setPortal] = useState(false)

  const navigate = useNavigate()

  const handleEndQuizClick = () => {
    setPortal(!portal)
  }

  const handleConfirmQuit = () => {
    navigate('/start')
  }

  const handleCancelQuit = () => {
    setPortal(false)
  }

  const randIndx = Math.trunc(Math.random() * arrQuestion.length)

  return (
    <>
      <FlexBox flexDirection='column'>
        <p>{arrQuestion[randIndx]}</p>
        <h5>Progress</h5>
        <p>
          Question {currentQuestion} of {ammaountQuestion}
        </p>
        {typeQuestion === 'boolean' ? (
          <FlexBox gap='16px' justifyContent='center'>
            <button>True</button>
            <button>False</button>
          </FlexBox>
        ) : (
          <FlexBox gap='16px' justifyContent='center'>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
          </FlexBox>
        )}
        <Timer />
        <button onClick={handleEndQuizClick}>End quiz</button>
        {portal &&
          modalRoot &&
          createPortal(<ModalQuit onConfirm={handleConfirmQuit} onCancel={handleCancelQuit} />, modalRoot)}
      </FlexBox>
    </>
  )
}
