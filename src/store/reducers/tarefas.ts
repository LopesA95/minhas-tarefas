import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tarefa } from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar javaScript',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar Typescript',
      enums.Priority.URGENTE,
      enums.Status.CONCLUIDA,
      'REVER AULA 2',
      2
    ),
    new Tarefa(
      'Estudar react',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      'PRATICAR O USEEFFECT',
      3
    )
  ],
  reducers: {
    deleteTask: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { deleteTask } = tarefasSlice.actions

export default tarefasSlice.reducer
