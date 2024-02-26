import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import Slider from 'react-slick'
import ProductCard from '../ProductCard'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import './Products.scss'
import { ProductType } from '../../types/Product'

interface ProductList {
  products: ProductType[]
  loading: string
}

const ProductList = ({ products, loading }: ProductList) => {
  const theme = useTheme()
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const settings = {
    arrows: false,
    dots: true,
    appendDots: (dots: any) => (
      <>
        <ul className="products_slick_dots slick_dots">{dots}</ul>
      </>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  if (loading === 'pending') {
    return <LinearProgress />
  }
  if (products.length === 0) {
    return <Typography align="center">Sorry, no matching results found</Typography>
  }
  return (
    <>
      {matchesMobile ? (
        <Box className="products_slick_slider-container">
          <Slider className="products_slick_slider" {...settings}>
            {products.map(({ id, imageUrl, name, price, description, shippingMethod }) => (
              <Grid key={id} item xs={12} sm={3} md={3}>
                <ProductCard
                  key={id}
                  id={id}
                  imageUrl={imageUrl}
                  name={name}
                  price={price}
                  description={description}
                  shippingMethod={shippingMethod}
                />
              </Grid>
            ))}
          </Slider>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {products.map(({ id, imageUrl, name, price, description, shippingMethod }) => (
            <Grid key={id} item xs={12} sm={3} md={3}>
              <ProductCard
                key={id}
                id={id}
                imageUrl={imageUrl}
                name={name}
                price={price}
                description={description}
                shippingMethod={shippingMethod}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
