import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface IStatistic {
  correct: number
  wrong: number
  remainTime: number
  answers: Array<{
    question: string
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
  }>
}

const initialState: IStatistic = {
  correct: 0,
  wrong: 0,
  remainTime: 0,
  answers: []
}

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    addAnswer: (
      state,
      action: PayloadAction<{
        question: string
        userAnswer: string
        correctAnswer: string
        isCorrect: boolean
      }>
    ) => {
      state.answers.push(action.payload)
      if (action.payload.isCorrect) {
        state.correct += 1
      } else {
        state.wrong += 1
      }
    },
    setRemainTime: (state, action: PayloadAction<number>) => {
      state.remainTime = action.payload
    },
    resetStatistic: (state) => {
      state.correct = 0
      state.wrong = 0
      state.remainTime = 0
      state.answers = []
    }
  }
})

export const { addAnswer, setRemainTime, resetStatistic } = statisticSlice.actions
export const selectStatistic = (state: RootState) => state.statistic
export default statisticSlice.reducer
