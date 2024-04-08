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
      <S.Tags>{priority}</S.Tags>
      <S.Tags>{status}</S.Tags>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setEditing(false)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.Button>Remover</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
