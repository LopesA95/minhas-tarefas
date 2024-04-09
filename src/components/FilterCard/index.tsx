import { modifyFilter } from '../../store/reducers/filter'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import * as enums from './../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  critery: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

export const FilterCard = ({ legend, critery, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, tarefas } = useSelector((state: RootReducer) => state)
  const isActiveVerification = () => {
    const sameCritery = filter.critery === critery && filter.valor === valor

    return sameCritery
  }

  const contTastks = () => {
    if (critery === 'todas') return tarefas.itens.length
    if (critery === 'prioridade') {
      return tarefas.itens.filter((item) => item.priority === valor).length
    }
    if (critery === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtered = () => {
    dispatch(
      modifyFilter({
        critery,
        valor
      })
    )
  }

  const cont = contTastks()
  const active = isActiveVerification()
  return (
    <S.Card active={active} onClick={filtered}>
      <S.Cont>{cont}</S.Cont>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}
