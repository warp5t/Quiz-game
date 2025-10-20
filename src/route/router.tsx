import { createBrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { App } from '../App'
import { MainScreen } from '../mainScreen/mainScreen'
import { StartScreen } from '../startScreen/startScreen'
import { StatScreen } from '../screens/statisticScreen/statisticScreen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    )
  },
  {
    path: '/main',
    element: (
      <StrictMode>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </StrictMode>
    )
  },
  {
    path: '/start',
    element: (
      <StrictMode>
        <Provider store={store}>
          <StartScreen />
        </Provider>
      </StrictMode>
    )
  },
  {
    path: '/stat',
    element: (
      <StrictMode>
        <Provider store={store}>
          <StatScreen />
        </Provider>
      </StrictMode>
    )
  }
])
