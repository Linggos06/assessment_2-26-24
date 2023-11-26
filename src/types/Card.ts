type CardType = {
  id: string
  image: string
  name: string
  originalPrice: number
  price: number
  discount: string
  rating: number
}

interface CardsState {
  entities: Array<CardType>
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

export { type CardType, type CardsState }
