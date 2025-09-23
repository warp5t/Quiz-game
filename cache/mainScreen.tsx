import { createPortal } from 'react-dom'
import { FlexBox } from '../reusalbleComponents/FlexBox/FlexBox'
import { Timer } from './components/timer'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { AppDispatch, RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { getResponseQuiz } from '../slicers/response/quizResponseSlice'
import { selectQuizResponse, selectQuizLoading, selectQuizError } from '../slicers/response/quizResponseSlice'
import { ModalQuit } from './components/modalQuit'
import { QuizCompleted } from './components/quizCompleted'
import { QuestionDisplay } from './components/questionDisplay'
import { ConfettiDemo } from './components/confetti'

const NoQuestions = () => <p>No questions available</p>

const Progress = ({ current, total }: { current: number; total: number }) => (
  <>
    <h5>Progress</h5>
    <p>
      Question {current} of {total}
    </p>
  </>
)

export const MainScreen = () => {
  const modalRoot = document.getElementById('modalQiut')
  const [portal, setPortal] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const hasFetchedRef = useRef(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [isConfetti, setConfetti] = useState(false)

  const ammountQuestions = useSelector((state: RootState) => state.quiz.config.amount)
  const category = useSelector((state: RootState) => state.quiz.config.category)
  const difficult = useSelector((state: RootState) => state.quiz.config.difficulty)

  const quizResponse = useSelector(selectQuizResponse)
  const quizLoading = useSelector(selectQuizLoading)
  const quizError = useSelector(selectQuizError)

  const navigate = useNavigate()

  useEffect(() => {
    if (!hasFetchedRef.current && ammountQuestions > 0) {
      let url = `https://opentdb.com/api.php?amount=${ammountQuestions}`
      if (difficult !== '') {
        url += `&difficulty=${difficult}`
      }
      if (category !== null) {
        url += `&category=${category.id}`
      }

      dispatch(getResponseQuiz(url))
      hasFetchedRef.current = true
    }
  }, [dispatch, ammountQuestions, difficult, category])

  const handleEndQuizClick = () => {
    setPortal(!portal)
  }

  const handleConfirmQuit = () => {
    navigate('/start')
  }

  const handleCancelQuit = () => {
    setPortal(false)
  }

  const handleAnswer = () => {
    if (currentQuestion + 1 >= ammountQuestions) {
      setQuizCompleted(true)
    } else {
      setCurrentQuestion((prev) => prev + 1)
      setConfetti(true)
    }
  }

  const handleStartNewQuiz = () => {
    navigate('/start')
  }

  if (quizLoading) {
    return <div>Loading questions...</div>
  }

  if (quizError) {
    return (
      <div>
        Error: {quizError}
        <button
          onClick={() => {
            setTimeout(() => {
              let url = `https://opentdb.com/api.php?amount=${ammountQuestions}`
              if (difficult !== '') url += `&difficulty=${difficult}`
              if (category !== null) url += `&category=${category.id}`
              dispatch(getResponseQuiz(url))
            }, 2000)
          }}
        >
          Try Again in 2 seconds
        </button>
      </div>
    )
  }

  const isQuestionAvailable =
    quizResponse &&
    quizResponse.results &&
    quizResponse.results.length > 0 &&
    currentQuestion < quizResponse.results.length

  let content
  if (quizCompleted) {
    content = <QuizCompleted onStartNewQuiz={handleStartNewQuiz} questionsCount={ammountQuestions} />
  } else if (isQuestionAvailable) {
    content = <QuestionDisplay questionData={quizResponse.results[currentQuestion]} onAnswer={handleAnswer} />
  } else {
    content = <NoQuestions />
  }

  return (
    <FlexBox flexDirection='column'>
      {content}

      {!quizCompleted && isQuestionAvailable && <Progress current={currentQuestion + 1} total={ammountQuestions} />}

      <Timer />
      <button onClick={handleEndQuizClick}>End quiz</button>

      {portal &&
        modalRoot &&
        createPortal(<ModalQuit onConfirm={handleConfirmQuit} onCancel={handleCancelQuit} />, modalRoot)}
      <ConfettiDemo isRun={isConfetti} />
    </FlexBox>
  )
}
