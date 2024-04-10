import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import {
  alterTask,
  deleteTask,
  editingTask
} from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Button, ButtonSave } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

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

  function attStatusTask(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterTask({
        id,
        finish: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          onChange={attStatusTask}
          checked={status === enums.Status.CONCLUIDA}
          type="checkbox"
          id={title}
        />
        <S.Title>
          {editing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <ButtonSave
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
            </ButtonSave>
            <S.ButtonCancel onClick={handleCancelEdithing}>
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
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
