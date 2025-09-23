// src/slicers/response/quizResponseSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface QuizQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface QuizResponse {
  response_code: number
  results: QuizQuestion[]
}

interface QuizResponseState {
  data: QuizResponse | null
  loading: boolean
  error: string | null
}

const initialState: QuizResponseState = {
  data: null,
  loading: false,
  error: null
}

// Async thunk для получения вопросов
export const getResponseQuiz = createAsyncThunk('quizResponse/getResponseQuiz', async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
})

export const quizResponseSlice = createSlice({
  name: 'quizResponse',
  initialState,
  reducers: {
    clearResponse: (state) => {
      state.data = null
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResponseQuiz.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getResponseQuiz.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getResponseQuiz.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch quiz data'
      })
  }
})

export const { clearResponse } = quizResponseSlice.actions

export const selectQuizResponse = (state: RootState) => state.quizResponse.data
export const selectQuizLoading = (state: RootState) => state.quizResponse.loading
export const selectQuizError = (state: RootState) => state.quizResponse.error

export default quizResponseSlice.reducer
