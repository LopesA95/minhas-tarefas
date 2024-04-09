import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FilterState = {
  term: string
  critery: 'priority' | 'status' | 'everyone'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  critery: 'everyone'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    modifyTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    setCritery: (
      state,
      action: PayloadAction<'priority' | 'status' | 'everyone'>
    ) => {
      state.critery = action.payload
    },
    setValor: (state, action: PayloadAction<enums.Priority | enums.Status>) => {
      state.valor = action.payload
    }
  }
})

export const { modifyTerm, setCritery, setValor } = filterSlice.actions

export default filterSlice.reducer
