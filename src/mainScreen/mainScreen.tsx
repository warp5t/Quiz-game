import { FlexBox } from '../reusalbleComponents/FlexBox/FlexBox'
import { Timer } from './components/timer'

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

export const MainScreen = () => {
  return (
    <>
      <FlexBox flexDirection='column'>
        <p>{arrQuestion[2]}</p>
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
      </FlexBox>
    </>
  )
}
