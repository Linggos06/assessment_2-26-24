import { AppBar, Toolbar, Typography } from '@mui/material'
import SearchBar from '../SearchBar'
import Cart from '../Cart'

import './Header.scss'

const Header = () => {
  return (
    <AppBar className="top_bar" position="fixed">
      <Toolbar>
        <Typography className="logo_container">
          <img className="logo_image" src={'/logo.png'} alt="Logo" />
        </Typography>
        <SearchBar />
        <Cart />
      </Toolbar>
    </AppBar>
  )
}

export default Header
