import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface ICategoryPersist {
  name: string
  amount: number
}

interface IDifficulty {
  difficult: string
  amount: number
}

interface IPersistStatistic {
  questionsOverall: number
  correctOverall: number
  categories: ICategoryPersist[]
  difficulty: IDifficulty[]
}

const initialState: IPersistStatistic = {
  questionsOverall: 0,
  correctOverall: 0,
  categories: [],
  difficulty: []
}

export const quizPersistSlice = createSlice({
  name: 'persistStatistic',
  initialState,
  reducers: {
    setQuestionOverall: (state, action: PayloadAction<number>) => {
      state.questionsOverall = action.payload
    },
    setCorrectOverall: (state, action: PayloadAction<number>) => {
      state.correctOverall = action.payload
    },
    setCategoryResult: (state, action: PayloadAction<ICategoryPersist>) => {
      const newCategory = action.payload

      state.questionsOverall += newCategory.amount

      const existingCategory = state.categories.find((cat) => cat.name === newCategory.name)

      if (existingCategory) {
        existingCategory.amount += newCategory.amount
      } else {
        state.categories.push(newCategory)
      }
    },
    setDifficultQuestions: (state, action: PayloadAction<IDifficulty>) => {
      const difficult = action.payload
      state.questionsOverall += difficult.amount

      const existingDifficult = state.difficulty.find((dif) => dif.difficult === difficult.difficult)

      if (existingDifficult) {
        existingDifficult.amount += difficult.amount
      } else {
        state.difficulty.push(difficult)
      }
    },
    resetPersistStatistic: (state) => {
      state.questionsOverall = 0
      state.correctOverall = 0
      state.categories = []
    }
  }
})

export const {
  setQuestionOverall,
  setCorrectOverall,
  setCategoryResult,
  setDifficultQuestions,
  resetPersistStatistic
} = quizPersistSlice.actions

export const selectPersistStatistic = (state: RootState) => state.persistStatistic

export const selectQuestionsOverall = (state: RootState) => state.persistStatistic.questionsOverall
export const selectCorrectOverall = (state: RootState) => state.persistStatistic.correctOverall
export const selectCategories = (state: RootState) => state.persistStatistic.categories
export const selectDifficulty = (state: RootState) => state.persistStatistic.difficulty

export default quizPersistSlice.reducer
