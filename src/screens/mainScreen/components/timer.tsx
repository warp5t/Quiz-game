import { useState, useEffect } from 'react'
import { FlexBox } from '../../../reusalbleComponents/FlexBox/FlexBox'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../store/store'
import { setRemainTime } from '../../../slicers/statistic/quizStatistic'
import { timeFormate } from '../../../utils/timeFormatter'
import styles from './time.module.css'

interface TimerProps {
  isEnd: boolean
  setEnd: (arg: boolean) => void
}

export const Timer = ({ isEnd, setEnd }: TimerProps) => {
  const initialMinutes = useSelector((state: RootState) => state.quiz.config.time)
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const dispatch = useDispatch<AppDispatch>()

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
    <div className={!isEnd ? styles.visible : styles.hidden}>
      <FlexBox justifyContent='center'>
        <div>{timeFormate(timeLeft)}</div>
      </FlexBox>
    </div>
  )
}
