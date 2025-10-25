import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import quizReducer from '../slicers/quizSetting/quizSettingSlice'
import quizResponseReducer from '../slicers/response/quizResponseSlice'
import statisticReducer from '../slicers/statistic/quizStatistic'
import persistStatisticReducer from '../slicers/statistic/persistQuizStatistic'

const persistConfig = {
  key: 'persistStatistic',
  storage,
  whitelist: ['questionsOverall', 'correctOverall', 'categories', 'difficulty', 'type']
}
const persistedStatisticReducer = persistReducer(persistConfig, persistStatisticReducer)

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    quizResponse: quizResponseReducer,
    statistic: statisticReducer,
    persistStatistic: persistedStatisticReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
