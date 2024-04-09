import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from './../../utils/enums/Tarefa'

const tarefas = [
  {
    id: 1,
    title: 'Estudar Typescript',
    description: 'Tipagem de codigo',
    priority: enums.Priority.NORMAL,
    status: enums.Status.PENDENTE
  },
  {
    id: 2,
    title: 'Pagar a conta de internet',
    description: 'Baixar fatura no gmail',
    priority: enums.Priority.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    id: 3,
    title: 'Ir para a academia',
    description: 'Fazer o treino de B',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

export const ListaDeTarefas = () => (
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
