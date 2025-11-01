import { motion } from 'motion/react'
import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'

interface QuestionDisplayProps {
  questionData: any
  onAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const QuestionDisplay = ({ questionData, onAnswer }: QuestionDisplayProps) => (
  <>
    <p dangerouslySetInnerHTML={{ __html: questionData.question }} />
    {questionData.type === 'boolean' ? (
      <FlexBox gap='16px' justifyContent='center'>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={onAnswer} value='true'>
          True
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={onAnswer} value='false'>
          False
        </motion.button>
      </FlexBox>
    ) : (
      <FlexBox gap='16px' justifyContent='center'>
        {[...questionData.incorrect_answers, questionData.correct_answer]
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              onClick={onAnswer}
              value={answer}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
      </FlexBox>
    )}
  </>
)
