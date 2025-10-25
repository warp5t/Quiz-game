import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { StatisticScreen } from '../../statisticScreen/statisticScreen'
// import { ResultScreen } from '../../resultScreen.tsx/resultScreen'

export const QuizCompleted = ({
  onStartNewQuiz,
  onChoseQuit,
  questionsCount
}: {
  onStartNewQuiz: () => void
  onChoseQuit: () => void
  questionsCount: number
}) => (
  <>
    <div>
      <h2>Quiz Completed!</h2>
      <p>You have answered all {questionsCount} questions.</p>
      <StatisticScreen />
      <FlexBox gap='10px'>
        <button onClick={onChoseQuit}>Choose another quiz</button>
        <button onClick={onStartNewQuiz}>Restart quiz</button>
      </FlexBox>
    </div>
  </>
)
