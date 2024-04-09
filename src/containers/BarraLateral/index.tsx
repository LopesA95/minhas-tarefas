import { useDispatch, useSelector } from 'react-redux'
import { FilterCard } from '../../components/FilterCard/index'

import * as S from './styles'
import { RootReducer } from '../../store'
import { modifyTerm } from '../../store/reducers/filter'

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
          <FilterCard legend="pendentes" cont={1} />
          <FilterCard legend="concluídas" cont={2} />
          <FilterCard legend="urgentes" cont={3} />
          <FilterCard legend="importantes" cont={4} />
          <FilterCard legend="normal" cont={5} />
          <FilterCard active legend="todas" cont={7} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
