import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { StatScreen } from '../../statisticScreen/statisticScreen'

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
      <StatScreen />
      <FlexBox>
        <button onClick={onChoseQuit}>Choose another quiz</button>
        <button onClick={onStartNewQuiz}>Restart quiz</button>
      </FlexBox>
    </div>
  </>
)
