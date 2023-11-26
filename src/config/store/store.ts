import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cardsSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
