import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'
import { apiGet, apiPost } from '../axios/axiosUtils'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { CartItemType, CartState } from '../../types/Cart'

const initialState = {
  entities: [],
  count: 0,
  loading: 'idle',
  error: null
} as CartState

export const addToCart = createAsyncThunk(
  '/add-to-cart',
  async (id: string, { rejectWithValue }) => {
    try {
      await apiPost(`/add-to-cart?id=${id}`)
      const response: AxiosResponse<unknown, unknown> = await apiGet(`/view-cart`)
      return response.data as Array<CartItemType>
    } catch (err: AxiosError | unknown) {
      if (axios.isAxiosError(err)) {
        const error: string = err?.response?.data || 'error'
        return rejectWithValue(error)
      } else {
        return rejectWithValue('error')
      }
    }
  }
)

export const substractFromCart = createAsyncThunk(
  '/subtract-from-cart',
  async (id: string, { rejectWithValue }) => {
    try {
      await apiPost(`/subtract-from-cart?id=${id}`)
      const response: AxiosResponse<unknown, unknown> = await apiGet(`/view-cart`)
      return response.data as Array<CartItemType>
    } catch (err: AxiosError | unknown) {
      if (axios.isAxiosError(err)) {
        const error: string = err?.response?.data || 'error'
        return rejectWithValue(error)
      } else {
        return rejectWithValue('error')
      }
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const data = Array.isArray(action.payload) ? action.payload : []
        state.loading = 'succeeded'
        state.entities = data
        state.count = data.length
        state.error = null
        localStorage.setItem('cart', JSON.stringify(data))
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload as string
      })
      .addCase(substractFromCart.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(substractFromCart.fulfilled, (state, action) => {
        const data = Array.isArray(action.payload) ? action.payload : []
        state.loading = 'succeeded'
        state.entities = data
        state.count = data.length
        state.error = null
        localStorage.setItem('cart', JSON.stringify(data))
      })
      .addCase(substractFromCart.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload as string
      })
  }
})

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
