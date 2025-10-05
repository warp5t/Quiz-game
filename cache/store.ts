import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../slicers/quizSetting/quizSettingSlice'
import quizResponseReducer from '../slicers/response/quizResponseSlice'
import statisticReducer from '../slicers/statistic/quizStatistic'

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    quizResponse: quizResponseReducer,
    statistic: statisticReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
