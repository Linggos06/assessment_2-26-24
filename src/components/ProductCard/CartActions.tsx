import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../config/store/store'
import { addToCart, substractFromCart } from '../../config/store/cartSlice'
import { ButtonGroup, IconButton, Tooltip } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'

type CartActionsType = {
  id: string
  itemCount: number
}

const CartActions = ({ id, itemCount }: CartActionsType) => {
  const dispatch = useDispatch<AppDispatch>()
  const handleAddToCart = () => {
    dispatch(addToCart(id))
  }
  const handleSubstractFromCart = () => {
    dispatch(substractFromCart(id))
  }
  return (
    <ButtonGroup
      variant="outlined"
      className={`item_manipulations + ${itemCount > 0 && 'active'}`}
      size="small"
      aria-label="outlined small button group">
      <Tooltip title="Add to Cart">
        <IconButton
          size="small"
          className="add_to_cart_button"
          aria-label="add to shopping cart"
          onClick={handleAddToCart}>
          <ShoppingCartIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Remove from Cart">
        <IconButton
          size="small"
          className="remove_from_cart_button"
          aria-label="remove from shopping cart"
          onClick={handleSubstractFromCart}>
          <RemoveShoppingCartIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  )
}

export default CartActions
