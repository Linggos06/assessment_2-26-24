import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import likedProductsReducer from './likedProductsSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    likedProducts: likedProductsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
