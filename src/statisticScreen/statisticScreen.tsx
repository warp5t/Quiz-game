import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export const StatScreen = () => {
  const rightAnsersAmmout = useSelector((state: RootState) => state.statistic.correct)
  const wrongAnsersAmmout = useSelector((state: RootState) => state.statistic.wrong)
  const remainedTime = useSelector((state: RootState) => state.statistic.remainTime)
  return (
    <>
      <h3>Statistic</h3>
      <div>rightAnsersAmmout: {rightAnsersAmmout}</div>
      <div>wrongAnsersAmmout: {wrongAnsersAmmout}</div>
      <div>remainedTime: {remainedTime}</div>
    </>
  )
}
