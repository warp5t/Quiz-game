import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { App } from '../App'
import { MainScreen } from '../mainScreen/mainScreen'

// Создаем роутер с существующими компонентами
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
  }
])

// Функция для инициализации роутера
export const initializeRouter = () => {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  const root = createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
