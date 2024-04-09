import { Provider } from 'react-redux'
import { BarraLateral } from './containers/BarraLateral'
import { ListaDeTarefas } from './containers/ListaDeTarefas'
import { Container, GlobalStyle } from './styles'

import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}
