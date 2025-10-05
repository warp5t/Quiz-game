import { useState, useEffect, useCallback } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../store/store'
import { setRemainTime } from '../../slicers/statistic/quizStatistic'

interface TimerProps {
  isEnd: boolean
  setEnd: (arg: boolean) => void
}

export const Timer = ({ isEnd, setEnd }: TimerProps) => {
  const initialMinutes = useSelector((state: RootState) => state.quiz.config.time)
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  // const [isRunning, setIsRunning] = useState(true)
  const dispatch = useDispatch<AppDispatch>()

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  useEffect(() => {
    let interval: number | undefined = undefined

    interval = window.setInterval(() => {
      setTimeLeft((currentTime) => {
        const newTime = currentTime - 1
        console.log('timeLeft: ', newTime) // Теперь будет показывать актуальное время
        if (isEnd) {
          dispatch(setRemainTime(timeLeft))
          if (interval) clearInterval(interval)
        }
        if (newTime <= 1) {
          setEnd(true)
          dispatch(setRemainTime(0))
          if (interval) clearInterval(interval)
        }

        return newTime
      })
    }, 100)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isEnd, dispatch, setEnd])

  // useEffect(() => {
  //   let interval: undefined | number = undefined

  //   interval = window.setInterval(() => {
  //   if (!isEnd && timeLeft > 0) {
  //       setTimeLeft((timeLeft) => timeLeft - 1)
  //       console.log('timeLeft: ', timeLeft)
  //     }
  //     if (timeLeft <= 0) {
  //       setEnd(true)
  //       clearInterval(interval)
  //     }
  //     if (isEnd) {
  //       dispatch(setRemainTime(timeLeft))
  //     }
  //   }, 1000)

  //   return () => {
  //     if (interval) clearInterval(interval)
  //   }
  // }, [isEnd, dispatch, setEnd])

  return (
    <FlexBox justifyContent='center'>
      <div>{formatTime(timeLeft)}</div>
    </FlexBox>
  )
}
