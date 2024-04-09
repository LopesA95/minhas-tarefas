import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FilterState = {
  term?: string
  critery: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  critery: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    modifyTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    modifyFilter: (state, action: PayloadAction<FilterState>) => {
      state.critery = action.payload.critery
      state.valor = action.payload.valor
    }
  }
})

export const { modifyTerm, modifyFilter } = filterSlice.actions

export default filterSlice.reducer
