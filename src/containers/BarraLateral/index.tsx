import { useDispatch, useSelector } from 'react-redux'
import { FilterCard } from '../../components/FilterCard/index'

import * as S from './styles'
import { RootReducer } from '../../store'
import { modifyTerm } from '../../store/reducers/filter'
import * as enums from './../../utils/enums/Tarefa'

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(modifyTerm(e.target.value))}
        />
        <S.Filters>
          <FilterCard
            valor={enums.Status.PENDENTE}
            critery="status"
            legend="pendentes"
          />
          <FilterCard
            valor={enums.Status.CONCLUIDA}
            critery="status"
            legend="concluídas"
          />
          <FilterCard
            valor={enums.Priority.URGENTE}
            critery="prioridade"
            legend="urgentes"
          />
          <FilterCard
            valor={enums.Priority.IMPORTANTE}
            critery="prioridade"
            legend="importantes"
          />
          <FilterCard
            valor={enums.Priority.NORMAL}
            critery="prioridade"
            legend="normal"
          />
          <FilterCard critery="todas" legend="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
