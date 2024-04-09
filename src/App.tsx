import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Container, GlobalStyle } from './styles'

import { store } from './store'
import { Home } from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova tarefa</h1>
  }
])

export function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}
