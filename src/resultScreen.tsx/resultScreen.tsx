import { FlexBox } from '../reusalbleComponents/FlexBox/FlexBox'

const correctAnswers = 1
const ammountQuestions = 6
const minutes = 2
const seconds = 13

export const ResultScreen = () => {
  return (
    <FlexBox justifyContent='center' flexDirection='column'>
      <h4>Thank you for completing this quiz. Here are your results</h4>
      <p>
        You answered {correctAnswers} out of {ammountQuestions} questions correctly
      </p>
      <p>configuration</p>
      <p>type</p>
      <p>category</p>
      <p>difficulty</p>
      <p>
        It took {minutes} minutes and {seconds} seconds to answer all the questions
      </p>
      <FlexBox gap='16px' justifyContent='center'>
        <button>Restart</button>
        <button>Choose another quiz</button>
      </FlexBox>
    </FlexBox>
  )
}
