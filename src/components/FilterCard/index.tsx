import * as S from './styles'

export type Props = {
  active?: boolean
  cont: number
  legend: string
}

export const FilterCard = ({ active, cont, legend }: Props) => (
  <S.Card active={active}>
    <S.Cont>{cont}</S.Cont>
    <S.Label>{legend}</S.Label>
  </S.Card>
)
