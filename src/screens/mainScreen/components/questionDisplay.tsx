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
        <button onClick={onAnswer} value='true'>
          True
        </button>
        <button onClick={onAnswer} value='false'>
          False
        </button>
      </FlexBox>
    ) : (
      <FlexBox gap='16px' justifyContent='center'>
        {[...questionData.incorrect_answers, questionData.correct_answer]
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <button key={index} onClick={onAnswer} value={answer} dangerouslySetInnerHTML={{ __html: answer }} />
          ))}
      </FlexBox>
    )}
  </>
)
