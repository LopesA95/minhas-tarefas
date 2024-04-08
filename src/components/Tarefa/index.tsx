import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

export const Tarefa = ({ description, priority, status, title }: Props) => {
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tags priority={priority}>{priority}</S.Tags>
      <S.Tags status={status}>{status}</S.Tags>
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
            <S.ButtonCancel>Remover</S.ButtonCancel>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
