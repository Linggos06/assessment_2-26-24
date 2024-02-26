import { Box, CardContent, Typography } from '@mui/material'

import './ProductCard.scss'

type CardBodyType = {
  id: number
  name: string
  price: string
  description: string
  shippingMethod: string
}

const CardBody = ({ id, name, price, description, shippingMethod }: CardBodyType) => {
  return (
    <CardContent className="card_body">
      <Box className="card_body_container">
        <Typography
          className="card_title"
          variant="subtitle1"
          gutterBottom
          sx={{ paddingLeft: '8px' }}>
          {name}
        </Typography>

        <Box className="price_container">
          <Typography className="current_price" variant="subtitle2" sx={{ paddingLeft: '8px' }}>
            {price} {' TL'}
          </Typography>
        </Box>
        <Typography className="description_title">Description</Typography>
        <input className="hack_input" type="checkbox" id={'expanded' + id}></input>
        <Typography className="product_description">{description}</Typography>
        <label className="read_more" htmlFor={'expanded' + id} role="button">
          devamını gör
        </label>
        <Typography className="shipping_method">{shippingMethod}</Typography>
      </Box>
    </CardContent>
  )
}

export default CardBody
