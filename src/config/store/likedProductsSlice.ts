import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './store'
import { LikedProductsState, ProductType } from '../../types/Product'

const initialState = {
  totalLikes: 0,
  likedProducts: [],
  visibleLikedProducts: [],
  currentPage: 1,
  productsPerPage: 4
} as LikedProductsState

export const fetchNextLikedProducts = (products: ProductType[]) => (dispatch: AppDispatch) => {
  dispatch(showNextLikedProducts(products))
}

// Create a slice for managing likes
const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState,
  reducers: {
    incrementLikes: (state) => {
      state.totalLikes += 1
    },
    decrementLikes: (state) => {
      state.totalLikes -= 1
    },
    toggleLikeProduct: (state, action) => {
      const productId = action.payload as number
      const index = state.likedProducts.indexOf(productId)

      if (index === -1) {
        state.likedProducts.push(productId)
        state.totalLikes += 1
      } else {
        state.likedProducts.splice(index, 1)
        state.totalLikes -= 1
      }
    },
    setAllLikedProducts: (state, action) => {
      const filteredProducts = action.payload
      state.currentPage = 1
      state.visibleLikedProducts = filteredProducts.slice(0, state.productsPerPage)
    },
    showNextLikedProducts: (state, action) => {
      const startIndex = state.currentPage * state.productsPerPage
      const endIndex = startIndex + state.productsPerPage
      const filteredProducts = action.payload
      state.visibleLikedProducts = filteredProducts.slice(startIndex, endIndex)
      state.currentPage += 1
    }
  }
})

export const selectLikedProducts = (state: RootState) => state.likedProducts
export const {
  incrementLikes,
  decrementLikes,
  toggleLikeProduct,
  setAllLikedProducts,
  showNextLikedProducts
} = likedProductsSlice.actions

export default likedProductsSlice.reducer
