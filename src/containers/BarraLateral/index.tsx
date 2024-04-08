import { FilterCard } from '../../components/FilterCard/index'

import * as S from './styles'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
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
