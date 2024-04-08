import { FilterCard } from '../../components/FilterCard/index'

import * as S from './styles'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard active />
      </S.Filters>
    </div>
  </S.Aside>
)
