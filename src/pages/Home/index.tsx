import { ButtonAdd } from '../../components/ButtonAdd'
import { ListaDeTarefas } from '../../containers/ListaDeTarefas'
import { BarraLateral } from './../../containers/BarraLateral/'

export const Home = () => (
  <>
    <BarraLateral visibilityFilters />
    <ListaDeTarefas />
    <ButtonAdd />
  </>
)
