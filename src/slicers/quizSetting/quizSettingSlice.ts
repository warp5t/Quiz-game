import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

export interface ICategory {
  id: number
  name: string
}

interface QuizConfig {
  amount: number
  category: ICategory | null
  difficulty: string
  type: string
  time: number
}

interface QuizState {
  config: QuizConfig
  isLoading: boolean
  error: string | null
}

const initialState: QuizState = {
  config: {
    amount: 1,
    category: null,
    difficulty: '',
    type: '',
    time: 2
  },
  isLoading: false,
  error: null
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.config.amount = action.payload
    },
    setCategory: (state, action: PayloadAction<ICategory | null>) => {
      state.config.category = action.payload
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.config.difficulty = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.config.type = action.payload
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.config.time = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    resetConfig: (state) => {
      state.config = initialState.config
    }
  }
})

export const { setAmount, setCategory, setDifficulty, setType, setTime, setLoading, setError, resetConfig } =
  quizSlice.actions

export default quizSlice.reducer

export const selectQuizConfigAmount = (state: RootState) => state.quiz.config.amount
export const selectQuizConfigCategory = (state: RootState) => state.quiz.config.category
export const selectQuizConfigDifficulty = (state: RootState) => state.quiz.config.difficulty
export const selectQuizConfigType = (state: RootState) => state.quiz.config.type
export const selectQuizIsLoading = (state: RootState) => state.quiz.isLoading
export const selectQuizError = (state: RootState) => state.quiz.error
