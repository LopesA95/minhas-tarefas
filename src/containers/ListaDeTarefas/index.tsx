import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    id: 1,
    title: 'Estudar Typescript',
    description: 'Tipagem de codigo',
    priority: 'normal',
    status: 'pendente'
  },
  {
    id: 2,
    title: 'Pagar a conta de internet',
    description: 'Baixar fatura no gmail',
    priority: 'urgente',
    status: 'concluída'
  },
  {
    id: 3,
    title: 'Ir para a academia',
    description: 'Fazer o treino de B',
    priority: 'importante',
    status: 'pendente'
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
