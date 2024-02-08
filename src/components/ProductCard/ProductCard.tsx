import { useState } from 'react'
import { Chip, Card, CardMedia } from '@mui/material'
import CartActions from './CartActions'
import QuantityButtons from './QuantityButtons'

import { CardType } from '../../types/Card'

import './ProductCard.scss'
import CardBody from './CardBody'

const ProductCard = ({ id, name, image, originalPrice, price, rating, discount }: CardType) => {
  const [itemCount, setItemCount] = useState(0)
  const handleIncrement = () => {
    setItemCount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setItemCount((prev) => prev - 1)
  }

  const fruitImage = image?.includes('lime')
    ? '/lemon.png'
    : image?.includes('strawberry')
      ? '/strawberry.png'
      : '/orange.png'

  return (
    <Card className="product_card">
      <div className="card_media_wrapper">
        <CardMedia
          component="img"
          sx={{
            height: 200,
            padding: '10px',
            objectFit: 'contain'
          }}
          image={fruitImage}
        />
        <Chip label={discount} className="discount_chip" />
        <CartActions {...{ id, itemCount }} />
      </div>
      <CardBody {...{ name, rating, price, originalPrice }}>
        <QuantityButtons {...{ itemCount, handleIncrement, handleDecrement }} />
      </CardBody>
    </Card>
  )
}

export default ProductCard
