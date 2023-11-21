import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/features/counter/counterSlice.js'
import todoSlice from '@/features/todo/todoSlice'
import filtersSlice from '@/features/todo/filtersSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoSlice,
        filters: filtersSlice,
    }
  })

export default store