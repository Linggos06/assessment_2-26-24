import { useDispatch, useSelector } from 'react-redux'
import { selectLikedProducts, toggleLikeProduct } from '../../config/store/likedProductsSlice'
import CardBody from './CardBody'
import { Chip, Card, CardMedia } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { ProductType } from '../../types/Product'

import './ProductCard.scss'

const ProductCard = ({ id, name, imageUrl, price, description, shippingMethod }: ProductType) => {
  const dispatch = useDispatch()
  const { likedProducts } = useSelector(selectLikedProducts)

  const handleLikeClick = (event: any) => {
    event.stopPropagation()
    dispatch(toggleLikeProduct(id))
  }

  return (
    <Card className="product_card">
      <div
        className="card_media_wrapper"
        onClick={() => window.open('https://www.google.com/', '_blank')}>
        <CardMedia className="card_media" component="img" image={imageUrl} />
        <Chip
          className="like_chip"
          onClick={handleLikeClick}
          icon={
            likedProducts.includes(id) ? (
              <FavoriteIcon className="like_button" color="error" fontSize="small" />
            ) : (
              <FavoriteBorderIcon className="like_button" color="disabled" fontSize="small" />
            )
          }
        />
      </div>
      <CardBody {...{ id, name, price, description, shippingMethod }} />
    </Card>
  )
}

export default ProductCard
