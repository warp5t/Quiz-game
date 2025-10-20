import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

interface ConfettiDemoProps {
  isRun: boolean
  duration?: number
  setConfetti: (arg: boolean) => void
}

export const ConfettiDemo = ({ isRun, duration = 5000, setConfetti }: ConfettiDemoProps) => {
  const [internalRun, setInternalRun] = useState(false)

  useEffect(() => {
    if (isRun) {
      setInternalRun(true)

      const timer = setTimeout(() => {
        setInternalRun(false)
        setConfetti(false)
      }, duration)

      return () => clearTimeout(timer)
    } else {
      setInternalRun(false)
    }
  }, [isRun, duration])

  if (!internalRun) return null

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      run={internalRun}
      recycle={true}
      numberOfPieces={200}
      gravity={0.2}
      wind={0.01}
    />
  )
}
