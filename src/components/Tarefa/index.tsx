import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { deleteTask, editingTask } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  description: descriptionOrigin,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOrigin.length > 0) setDescription(descriptionOrigin)
  }, [descriptionOrigin])

  function handleCancelEdithing() {
    setEditing(false)
    setDescription(descriptionOrigin)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tags paramether="priority" priority={priority}>
        {priority}
      </S.Tags>
      <S.Tags paramether="status" status={status}>
        {status}
      </S.Tags>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.ButtonSave
              onClick={() => {
                dispatch(
                  editingTask({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </S.ButtonSave>
            <S.ButtonCancel onClick={handleCancelEdithing}>
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

export default Tarefa
