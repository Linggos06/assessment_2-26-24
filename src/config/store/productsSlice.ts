import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'
import { AppDispatch } from './store'
import { apiGet } from '../axios/axiosUtils'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { ProductType, ProductsState } from '../../types/Product'

const initialState = {
  allProducts: [],
  visibleProducts: [],
  currentPage: 1,
  productsPerPage: 4,
  loading: 'idle',
  error: null
} as ProductsState

export const fetchProducts = createAsyncThunk(
  '/products',
  async (_userData, { rejectWithValue, dispatch }) => {
    try {
      const response: AxiosResponse<Array<ProductType>> = await apiGet(
        'https://honey-badgers-ecommerce.glitch.me/products'
      )
      dispatch(setAllProducts(response.data))
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

export const fetchNextProducts = () => (dispatch: AppDispatch) => {
  dispatch(showNextProducts())
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload
      state.currentPage = 1
      state.visibleProducts = state.allProducts.slice(0, state.productsPerPage)
    },
    showNextProducts: (state) => {
      const startIndex = state.currentPage * state.productsPerPage
      const endIndex = startIndex + state.productsPerPage
      state.visibleProducts = state.allProducts.slice(startIndex, endIndex)
      state.currentPage += 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchProducts.fulfilled, (state) => {
        state.loading = 'succeeded'
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload as string
      })
  }
})

export const selectProducts = (state: RootState) => state.products
export const { setAllProducts, showNextProducts } = productsSlice.actions

export default productsSlice.reducer
