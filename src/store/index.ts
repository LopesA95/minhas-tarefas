import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filterReducer from './reducers/filter'

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
