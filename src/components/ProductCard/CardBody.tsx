import { ReactNode } from 'react'
import { Box, CardContent, Rating, Typography } from '@mui/material'

type CardBodyType = {
  name: string
  rating: number
  price: number
  originalPrice: number
  children: ReactNode
}

const CardBody = ({ name, rating, price, originalPrice, children }: CardBodyType) => {
  return (
    <CardContent className="card_body">
      <Box className="card_body_container">
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Box className="rating_container">
          <Rating name="rating" defaultValue={rating} readOnly />
          <Typography className="rating_count" gutterBottom>
            {`(${rating})`}
          </Typography>
        </Box>
        <Box className="price_container">
          <Typography className="current_price" variant="subtitle1">
            {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Typography>
          <Typography className="previous_price" variant="subtitle1">
            {originalPrice.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </Typography>
        </Box>
      </Box>
      {children}
    </CardContent>
  )
}

export default CardBody
