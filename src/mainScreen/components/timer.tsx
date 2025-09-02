import React, { useState, useEffect, useCallback } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'

export const Timer = ({ initialMinutes = 5 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const [isRunning, setIsRunning] = useState(false)

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  useEffect(() => {
    let interval: undefined | number = undefined
    setIsRunning(true)
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  })

  return (
    <FlexBox justifyContent='center'>
      <div>{formatTime(timeLeft)}</div>
    </FlexBox>
  )
}
