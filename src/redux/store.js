import { configureStore } from '@reduxjs/toolkit'
import picturesReduser from './picturesSlice'

const store = configureStore({
  reducer: {
    pictures: picturesReduser,
  }
})

export default store;