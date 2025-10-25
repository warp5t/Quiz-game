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

interface IType {
  type: string
  amount: number
}

interface IPersistStatistic {
  questionsOverall: number
  correctOverall: number
  categories: ICategoryPersist[]
  difficulty: IDifficulty[]
  type: IType[]
}

const initialState: IPersistStatistic = {
  questionsOverall: 0,
  correctOverall: 0,
  categories: [],
  difficulty: [],
  type: []
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
    setCategoryQuestion: (state, action: PayloadAction<ICategoryPersist>) => {
      const newCategory = action.payload

      const existingCategory = state.categories.find((cat) => cat.name === newCategory.name)

      if (existingCategory) {
        existingCategory.amount += newCategory.amount
      } else {
        state.categories.push(newCategory)
      }
    },
    setDifficultQuestion: (state, action: PayloadAction<IDifficulty>) => {
      const difficult = action.payload
      const existingDifficult = state.difficulty.find((dif) => dif.difficult === difficult.difficult)

      if (existingDifficult) {
        existingDifficult.amount += difficult.amount
      } else {
        state.difficulty.push(difficult)
      }
    },
    setTypeQuestion: (state, action: PayloadAction<IType>) => {
      const type = action.payload
      const existingType = state.type.find((tp) => tp.type === type.type)

      if (existingType) {
        existingType.amount += type.amount
      } else {
        state.type.push(type)
      }
    },
    resetPersistStatistic: (state) => {
      state.questionsOverall = 0
      state.correctOverall = 0
      state.categories = []
      state.difficulty = []
      state.type = []
    }
  }
})

export const {
  setQuestionOverall,
  setCorrectOverall,
  setCategoryQuestion,
  setDifficultQuestion,
  setTypeQuestion,
  resetPersistStatistic
} = quizPersistSlice.actions

export const selectPersistStatistic = (state: RootState) => state.persistStatistic
export const selectQuestionsOverall = (state: RootState) => state.persistStatistic.questionsOverall
export const selectCorrectOverall = (state: RootState) => state.persistStatistic.correctOverall
export const selectDifficulty = (state: RootState) => state.persistStatistic.difficulty
export const selectCategories = (state: RootState) => state.persistStatistic.categories
export const selectType = (state: RootState) => state.persistStatistic.type

export default quizPersistSlice.reducer
