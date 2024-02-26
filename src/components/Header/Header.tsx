import { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import SearchBar from '../SearchBar'
import DrawerList from './DrawerList'

import MenuIcon from '@mui/icons-material/Menu'

import './Header.scss'

const Header = () => {
  const matchesMobile = useMediaQuery('(max-width:480px)')
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    if (
      (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') ||
      (event as React.KeyboardEvent).key === 'Shift'
    ) {
      return
    }
    setOpen(open)
  }

  return (
    <AppBar className="top_bar" position="fixed">
      <Toolbar className="header_container">
        {matchesMobile ? (
          <Box className="hamburger_menu-wrapper">
            <Typography className="logo_container" sx={{ pr: '24px' }}>
              <img className="logo_image" src={'/Logo_main.png'} alt="Logo" />
            </Typography>
            <Box>
              <IconButton
                className="hamburger_menu-button"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer
                id="menu_drawer"
                anchor="right"
                variant="temporary"
                open={open}
                onClick={toggleDrawer(false)}>
                <DrawerList {...{ toggleDrawer }} />
              </Drawer>
            </Box>
          </Box>
        ) : (
          <Typography className="logo_container" sx={{ pr: '24px' }}>
            <img className="logo_image" src={'/Logo_main.png'} alt="Logo" />
          </Typography>
        )}
        <SearchBar />
      </Toolbar>
    </AppBar>
  )
}

export default Header
