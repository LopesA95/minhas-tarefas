import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      title: 'Estudar Typescript na ebac',
      description: 'Tipagem de codigo',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      title: 'Estudar react na ebac',
      description: 'Tipagem de codigo',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      title: 'Estudar Redux na ebac',
      description: 'Tipagem de codigo',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editingTask: (state, action: PayloadAction<Tarefa>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    cadastrarTask: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const taskExisting = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskExisting) {
        alert('Já existe uma tarefa com esse nome!')
      } else {
        const lastTask = state.itens[state.itens.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    alterTask: (
      state,
      action: PayloadAction<{ id: number; finish: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finish
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { deleteTask, editingTask, cadastrarTask, alterTask } =
  tarefasSlice.actions

export default tarefasSlice.reducer
