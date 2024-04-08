import * as S from './styles'

export type Props = {
  active?: boolean
}

export const FilterCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Cont>3 </S.Cont>
    <S.Label>pendentes</S.Label>
  </S.Card>
)
