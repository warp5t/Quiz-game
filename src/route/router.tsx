import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { App } from '../App'
import { MainScreen } from '../mainScreen/mainScreen'
import { StartScreen } from '../startScreen/startScreen'
import { StatScreen } from '../statisticScreen/statisticScreen'

const router = createBrowserRouter([
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

export const initializeRouter = () => {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  const root = createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
