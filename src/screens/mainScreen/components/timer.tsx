import { useState, useEffect, useCallback } from 'react'
import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../store/store'
import { setRemainTime } from '../../../slicers/statistic/quizStatistic'

interface TimerProps {
  isEnd: boolean
  setEnd: (arg: boolean) => void
}

export const Timer = ({ isEnd, setEnd }: TimerProps) => {
  const initialMinutes = useSelector((state: RootState) => state.quiz.config.time)
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const dispatch = useDispatch<AppDispatch>()

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  useEffect(() => {
    setTimeLeft(initialMinutes * 60)
  }, [initialMinutes])

  useEffect(() => {
    if (isEnd) {
      dispatch(setRemainTime(timeLeft))
      return
    }

    const interval = window.setInterval(() => {
      setTimeLeft((currentTime) => {
        const newTime = currentTime - 1

        if (newTime <= 0) {
          setEnd(true)
          dispatch(setRemainTime(0))
          clearInterval(interval)
          return 0
        }

        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isEnd, dispatch, setEnd])

  return (
    <FlexBox justifyContent='center'>
      <div>{formatTime(timeLeft)}</div>
    </FlexBox>
  )
}
