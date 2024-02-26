import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../config/store/store'
import {
  fetchProducts,
  fetchNextProducts,
  setAllProducts,
  selectProducts
} from '../../config/store/productsSlice'
import {
  selectLikedProducts,
  setAllLikedProducts,
  fetchNextLikedProducts
} from '../../config/store/likedProductsSlice'
import { Box, Button, Container, Typography } from '@mui/material'
import ProductList from './ProductList'

import EastIcon from '@mui/icons-material/East'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import './Products.scss'
import { ProductType } from '../../types/Product'

enum DisplayProducts {
  Total = 0,
  Liked = 1
}

const Products = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [displayMode, setDisplayMode] = useState(DisplayProducts.Total)

  const { likedProducts, totalLikes, visibleLikedProducts } = useSelector(selectLikedProducts)
  const { allProducts, visibleProducts, loading } = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const handleGetMoreClick = () => {
    if (displayMode === DisplayProducts.Total) {
      dispatch(fetchNextProducts())
    }
    if (displayMode === DisplayProducts.Liked) {
      const filteredProducts = filterProducts()
      dispatch(fetchNextLikedProducts(filteredProducts))
    }
  }

  const handleClick = () => {
    const newState =
      displayMode === DisplayProducts.Total ? DisplayProducts.Liked : DisplayProducts.Total
    displayProducts(newState)
    setDisplayMode(newState)
  }

  const displayProducts = (mode: number) => {
    if (mode === DisplayProducts.Total) {
      dispatch(setAllProducts(allProducts))
    }
    if (mode === DisplayProducts.Liked) {
      const filteredProducts = filterProducts()
      dispatch(setAllLikedProducts(filteredProducts))
    }
  }
  const filterProducts = () =>
    allProducts.filter((product: ProductType) => likedProducts.includes(product.id))

  let renderedProducts =
    displayMode === DisplayProducts.Total ? visibleProducts : visibleLikedProducts

  return (
    <Container className="wrapper">
      <Box className="products-container">
        <Typography className="products-container_title">Content title goes here</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            margin: 'auto 0'
          }}>
          <Box className="total_like_container">
            {totalLikes !== 0 ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}

            <Typography
              className="total_like_container_title"
              sx={{ flexGrow: 1, fontSize: '18px', fontWeight: '500' }}>
              {totalLikes} ÜRÜN
            </Typography>
          </Box>

          <Button
            key={displayMode}
            className="filteringButton"
            variant={displayMode === DisplayProducts.Total ? 'contained' : 'outlined'}
            sx={{
              width: '135px'
            }}
            onClick={handleClick}>
            {displayMode === DisplayProducts.Total ? 'Beğenilenler' : 'Tüm Ürünler'}
          </Button>
        </Box>
      </Box>
      <ProductList {...{ loading, products: renderedProducts }} />
      <Box className="load_button-container">
        <Button
          className="load_button"
          onClick={handleGetMoreClick}
          disabled={renderedProducts.length === 0}
          sx={{ fontFamily: 'Roboto, sans-serif' }}>
          Daha fazla
          <EastIcon sx={{ paddingLeft: '10px', fontSize: 24, width: 'auto' }} />
        </Button>
      </Box>
    </Container>
  )
}

export default Products
