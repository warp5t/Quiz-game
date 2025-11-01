import { motion } from 'motion/react'
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
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={onChoseQuit}>
          Choose another quiz
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={onStartNewQuiz}>
          Restart quiz
        </motion.button>
      </FlexBox>
    </div>
  </>
)
