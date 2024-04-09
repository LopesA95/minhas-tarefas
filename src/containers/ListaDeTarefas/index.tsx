import { useSelector } from 'react-redux'
import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

export const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
