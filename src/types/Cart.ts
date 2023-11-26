type CartItemType = {
  productId: string
  quantity: number
  name: string
  price: number
}

interface CartState {
  entities: Array<CartItemType>
  count: number
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

export { type CartItemType, type CartState }
