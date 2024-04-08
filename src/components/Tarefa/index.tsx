import * as S from './styles'

export const Tarefa = () => (
  <S.Card>
    <S.Title>Nome da tarefa</S.Title>
    <S.Tags>Importante</S.Tags>
    <S.Tags>Pendente</S.Tags>
    <S.Description />
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.ActionBar>
  </S.Card>
)
