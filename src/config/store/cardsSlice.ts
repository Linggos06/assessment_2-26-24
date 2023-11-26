import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'
import { apiGet, apiPost } from '../axios/axiosUtils'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { CardType, CardsState } from '../../types/Card'

const initialState = {
  entities: [],
  loading: 'idle',
  error: null
} as CardsState

export const fetchCards = createAsyncThunk('/products', async (_userData, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<unknown, unknown> = await apiGet('/products')
    return response.data as Array<CardType>
  } catch (err: AxiosError | unknown) {
    if (axios.isAxiosError(err)) {
      const error: string = err?.response?.data || 'error'
      return rejectWithValue(error)
    } else {
      return rejectWithValue('error')
    }
  }
})

export const fetchCardsByName = createAsyncThunk(
  '/search',
  async (name: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<unknown, unknown> = await apiPost(`/search?name=${name}`)
      return response.data as Array<CardType>
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

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.entities = action.payload
        state.error = null
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload as string
      })
      .addCase(fetchCardsByName.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchCardsByName.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.entities = action.payload
        state.error = null
      })
      .addCase(fetchCardsByName.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload as string
      })
  }
})

export const selectCards = (state: RootState) => state.cards

export default cardsSlice.reducer
