import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

export const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { term, critery, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTask = () => {
    let tasksFiltered = itens
    if (term !== undefined) {
      tasksFiltered = tasksFiltered.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (critery === 'prioridade') {
        tasksFiltered = tasksFiltered.filter((item) => item.priority === valor)
      } else if (critery === 'status') {
        tasksFiltered = tasksFiltered.filter((item) => item.status === valor)
      }
      return tasksFiltered
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
      </ul>
      <ul>
        <li>{critery}</li>
      </ul>
      <ul>
        <li>{valor}</li>
      </ul>
      <ul>
        {filterTask().map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
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
