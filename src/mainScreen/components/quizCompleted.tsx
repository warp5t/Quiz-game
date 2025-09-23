export const QuizCompleted = ({
  onStartNewQuiz,
  questionsCount
}: {
  onStartNewQuiz: () => void
  questionsCount: number
}) => (
  <div>
    <h2>Quiz Completed!</h2>
    <p>You have answered all {questionsCount} questions.</p>
    <button onClick={onStartNewQuiz}>Start New Quiz</button>
  </div>
)
