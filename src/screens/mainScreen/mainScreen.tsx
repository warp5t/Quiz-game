import { createPortal } from 'react-dom'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { Timer } from './components/timer'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { getResponseQuiz } from '../../slicers/response/quizResponseSlice'
import { selectQuizResponse, selectQuizLoading, selectQuizError } from '../../slicers/response/quizResponseSlice'
import { ModalQuit } from './components/modalQuit'
import { QuizCompleted } from './components/quizCompleted'
import { QuestionDisplay } from './components/questionDisplay'
import { ConfettiDemo } from './components/confetti'
import { wrongAnswerAnimation } from './components/wrongAnswer/wrongAnswer'
import { addAnswer, resetStatistic, selectStatistic } from '../../slicers/statistic/quizStatistic'
import styles from './mainScreen.module.css'
import {
  resetConfig,
  selectQuizConfigAmount,
  selectQuizConfigCategory,
  selectQuizConfigDifficulty,
  selectQuizConfigType
} from '../../slicers/quizSetting/quizSettingSlice'
import {
  selectPersistStatistic,
  setCategoryQuestion,
  setCorrectOverall,
  setQuestionOverall
} from '../../slicers/statistic/persistQuizStatistic'

const NoQuestions = () => <p>No questions available</p>

const Progress = ({ current, total }: { current: number; total: number }) => (
  <>
    <div>Progress</div>
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
  const [isQuizCompleted, setQuizCompleted] = useState(false)
  const [isConfetti, setConfetti] = useState(false)

  const ammountQuestions = useSelector(selectQuizConfigAmount)
  const category = useSelector(selectQuizConfigCategory)
  const difficult = useSelector(selectQuizConfigDifficulty)
  const type = useSelector(selectQuizConfigType)

  const quizResponse = useSelector(selectQuizResponse)
  const quizLoading = useSelector(selectQuizLoading)
  const quizError = useSelector(selectQuizError)

  const currentStatistic = useSelector(selectStatistic)
  const persistStatistic = useSelector(selectPersistStatistic)

  const navigate = useNavigate()

  const qiuzFetch = () => {
    const abortController = new AbortController()

    if (!hasFetchedRef.current && ammountQuestions > 0) {
      let url = `https://opentdb.com/api.php?amount=${ammountQuestions}`
      if (difficult !== '') {
        url += `&difficulty=${difficult}`
      }
      if (category !== null) {
        url += `&category=${category.id}`
      }
      if (type !== '') {
        url += `&type=${type}`
      }
      dispatch(getResponseQuiz(url))
      hasFetchedRef.current = true
    } else {
      console.error('ammountQuestions < 0 or question has fetched')
    }

    return () => {
      abortController.abort()
    }
  }

  useEffect(() => {
    qiuzFetch()
  }, [dispatch, ammountQuestions, difficult, category])

  useEffect(() => {
    if (isQuizCompleted) {
      dispatch(setQuestionOverall(persistStatistic.questionsOverall + ammountQuestions))

      dispatch(setCorrectOverall(persistStatistic.correctOverall + currentStatistic.correct))
    }
  }, [isQuizCompleted])

  const handleEndQuizClick = () => {
    setPortal(!portal)
  }

  const handleConfirmQuit = () => {
    dispatch(resetConfig())
    navigate('/start')
  }

  const handleCancelQuit = () => {
    setPortal(false)
  }

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!quizResponse?.results?.[currentQuestion]) {
      console.error('Question data is not available')
      return
    }

    const selectedAnswer = event.currentTarget.value
    const currentQuestionData = quizResponse.results[currentQuestion]
    const correctAnswer = currentQuestionData.correct_answer

    const isCorrect = selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()

    dispatch(
      addAnswer({
        question: currentQuestionData.question,
        userAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect
      })
    )

    if (isCorrect) {
      setConfetti(true)

      if (currentQuestion + 1 >= ammountQuestions) {
        setQuizCompleted(true)
      } else {
        setCurrentQuestion((prev) => prev + 1)
      }
    } else {
      wrongAnswerAnimation()
      if (currentQuestion + 1 >= ammountQuestions) {
        setQuizCompleted(true)
      } else {
        setCurrentQuestion((prev) => prev + 1)
      }
    }
  }

  const handleStartNewQuiz = () => {
    if (isQuizCompleted && quizResponse?.results?.[0]) {
      const categoryName = quizResponse.results[0].category

      dispatch(
        setCategoryQuestion({
          name: categoryName,
          amount: ammountQuestions
        })
      )

      setCurrentQuestion(0)
      setQuizCompleted(false)
      setConfetti(false)
      hasFetchedRef.current = false
      dispatch(resetStatistic())
      dispatch(resetConfig())
      qiuzFetch()
    }
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
              if (type !== '') url += `&type=${type}`
              dispatch(getResponseQuiz(url))
            }, 2000)
          }}
        >
          Try Again in 2 seconds
        </button>
      </div>
    )
  }

  const isQuestionAvailable = Boolean(quizResponse?.results?.[currentQuestion])

  let content
  if (isQuizCompleted) {
    content = (
      <QuizCompleted
        onStartNewQuiz={handleStartNewQuiz}
        onChoseQuit={handleConfirmQuit}
        questionsCount={ammountQuestions}
      />
    )
  } else if (quizResponse?.results?.[currentQuestion]) {
    content = <QuestionDisplay questionData={quizResponse.results[currentQuestion]} onAnswer={handleAnswer} />
  } else {
    content = <NoQuestions />
  }
  return (
    <FlexBox flexDirection='column'>
      {!isQuizCompleted && isQuestionAvailable && <Progress current={currentQuestion + 1} total={ammountQuestions} />}

      {content}
      <Timer isEnd={isQuizCompleted} setEnd={setQuizCompleted} />
      <button onClick={handleEndQuizClick} className={`${isQuizCompleted ? styles.hideButton : ''}`}>
        End quiz
      </button>

      {portal &&
        modalRoot &&
        createPortal(<ModalQuit onConfirm={handleConfirmQuit} onCancel={handleCancelQuit} />, modalRoot)}
      <ConfettiDemo isRun={isConfetti} setConfetti={setConfetti} />
    </FlexBox>
  )
}
