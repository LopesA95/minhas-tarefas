import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'
import { MainContainer, Title } from '../../styles'

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

  const resultFilteredView = (quantity: number) => {
    let mensage = ''

    const complementation =
      term !== undefined && term.length > 0
        ? `e
    "${term}"`
        : ''
    if (critery === 'todas') {
      mensage = `${quantity} tarefa(s) encontrada(s) como: todas ${complementation}`
    } else {
      mensage = `${quantity} tarefa(s) encontrada(s) como: "${`${critery}: ${valor}`}" ${complementation}`
    }

    return mensage
  }

  const tasks = filterTask()
  const mensage = resultFilteredView(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{mensage}</Title>
      <ul>
        {tasks.map((t) => (
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
    </MainContainer>
  )
}
