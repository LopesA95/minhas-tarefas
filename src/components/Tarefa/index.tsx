import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { deleteTask } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

export const Tarefa = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tags paramether="priority" priority={priority}>
        {priority}
      </S.Tags>
      <S.Tags paramether="status" status={status}>
        {status}
      </S.Tags>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonCancel onClick={() => setEditing(false)}>
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.ButtonCancel onClick={() => dispatch(deleteTask(id))}>
              Remover
            </S.ButtonCancel>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
