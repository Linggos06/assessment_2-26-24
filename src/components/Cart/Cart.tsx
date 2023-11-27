import { useState, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../config/store/cartSlice'
import { Badge, Box, IconButton, List, ListItem, ListItemText, Popover } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import './Cart.scss'
import { CartItemType } from '../../types/Cart'

const Cart = () => {
  const { entities } = useSelector(selectCart)
  const items: CartItemType[] =
    entities.length > 0 ? entities : JSON.parse(localStorage.getItem('cart') || '[]')
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const products = items.filter((product) => product.quantity !== 0)
  const count = products.length

  const open = Boolean(anchorEl)
  return (
    <Box className="cart_container">
      <Popover
        sx={{
          pointerEvents: 'none'
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
        {products.length > 0 ? (
          <List className="products_list">
            {products.map(({ name, quantity, price }) => (
              <ListItem>
                <ListItemText
                  primary={name}
                  secondary={`Quantity - ${quantity}, Price per unit - ${price.toLocaleString(
                    'en-US',
                    {
                      style: 'currency',
                      currency: 'USD'
                    }
                  )}, Total price - ${(quantity > 0 ? price * quantity : price).toLocaleString(
                    'en-US',
                    {
                      style: 'currency',
                      currency: 'USD'
                    }
                  )}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <ListItem>
            <ListItemText primary="No items in the cart" />
          </ListItem>
        )}
      </Popover>
      <IconButton
        className="cart_icon"
        aria-label="cart"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        <Badge badgeContent={count} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  )
}

export default Cart
