type ProductType = {
  id: number
  imageUrl: string
  name: string
  price: string
  description: string
  shippingMethod: string
}

interface ProductsState {
  allProducts: Array<ProductType>
  visibleProducts: Array<ProductType>
  currentPage: number
  productsPerPage: number
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

interface LikedProductsState {
  totalLikes: number
  likedProducts: number[]
  visibleLikedProducts: Array<ProductType>
  currentPage: number
  productsPerPage: number
}

export { type ProductType, type ProductsState, type LikedProductsState }
