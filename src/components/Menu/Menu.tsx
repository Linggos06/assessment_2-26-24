import React, { useState, createRef, useLayoutEffect, useMemo, useRef, useEffect } from 'react'
import useScreenSize from './useScreenSize'
import { Box, List, ListItem, Menu, MenuItem } from '@mui/material'
import SubMenu from './SubMenu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import './Menu.scss'

const itemsArr = [
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item',
  'Menu Item'
]

const menuItems = itemsArr.map((text, index) => {
  const id = (index + 1).toString()
  return {
    id,
    text
  }
})

const Menuu = () => {
  const screenSize = useScreenSize()

  const container = useRef<HTMLUListElement | null>(null)

  const moreButton = useRef<HTMLDivElement | null>(null)

  const [anchorEl, setAnchorEl] = useState(null)

  const [showMoreItem, setShowMoreItem] = useState(false)

  const [displayMenuNodes, setDisplayMenuNodes] = useState(0)
  const [dropDownItems, setdropDownItems] = useState<React.RefObject<HTMLElement>[]>([])

  const [openSubMenu, setopenSubMenu] = useState<HTMLDivElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setopenSubMenu(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setopenSubMenu(null)
  }

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(openSubMenu)
  const id = open ? 'simple-popover' : undefined

  const renderMenuItemRefs = useMemo(() => {
    const refsArr = []
    for (let i = 0; i < menuItems.length; i += 1) {
      refsArr.push(createRef() as React.RefObject<HTMLElement>)
    }
    return refsArr
  }, [])

  const calculateMenuItemsCount = () => {
    const offsetContainerWidth = container.current?.offsetWidth || 0
    const scrollContainerWidth = 1200 - 24 * 2 // including 2 paddings
    const moreButtonWidth = moreButton.current?.offsetWidth || 70

    if (scrollContainerWidth > offsetContainerWidth) {
      let totalItemsWidth = 0

      let count = 0

      const widthConstant = 96 // width of a menu item

      for (let index = 0; index < renderMenuItemRefs.length; index += 1) {
        let currentTotalWidth = totalItemsWidth + widthConstant

        if (currentTotalWidth > offsetContainerWidth) {
          let newCurrentTotal = currentTotalWidth + moreButtonWidth

          if (newCurrentTotal > offsetContainerWidth) {
            for (let j = count; j > 0; j -= 1) {
              if (newCurrentTotal - widthConstant < offsetContainerWidth) {
                break
              } else {
                newCurrentTotal -= widthConstant
                count -= 1
              }
            }
          }

          break
        } else {
          count += 1
          totalItemsWidth = currentTotalWidth
        }
      }

      const newDropDownItems = renderMenuItemRefs.slice(count)

      setDisplayMenuNodes(count)

      setShowMoreItem(true)
      setdropDownItems(newDropDownItems)
      return
    }
    setShowMoreItem(false)
    setDisplayMenuNodes(0)
  }

  useLayoutEffect(() => {
    calculateMenuItemsCount()
  }, [screenSize.width])

  const renderMenuItems = useMemo(() => {
    const menuItemsWithoutHidden =
      displayMenuNodes === 0 ? itemsArr : itemsArr.slice(0, displayMenuNodes)

    return menuItemsWithoutHidden.map((_, index) => {
      return (
        <ListItem
          style={{
            display: 'block',
            boxSizing: 'border-box',
            width: '96px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: '0',
            fontSize: '16px',
            cursor: 'pointer'
          }}
          aria-owns={open ? id : undefined}
          aria-haspopup="true"
          className="menu_tab"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          key={index}
          component="div"
          ref={(el: HTMLDivElement) => {
            //@ts-ignore
            renderMenuItemRefs[index] = el
            return el
          }}>
          Menu Item
        </ListItem>
      )
    })
  }, [displayMenuNodes])

  const isOpenedMenu = Boolean(anchorEl)

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '90px',
        marginBottom: '12px',
        padding: '0px 24px'
      }}>
      <List
        style={{
          display: 'flex',
          position: 'relative',
          boxSizing: 'border-box',
          padding: '18px 0 0 0',
          height: '50px',
          overflow: 'hidden'
        }}
        ref={container}>
        {renderMenuItems}

        <SubMenu
          width={container?.current?.offsetWidth || 0}
          open={open}
          anchorEl={openSubMenu}
          id={id}
        />

        {showMoreItem && (
          <ListItem
            style={{
              position: 'absolute',
              boxSizing: 'border-box',
              width: 'auto',
              right: 0,
              padding: '0',
              paddingBottom: '16px',
              color: '#6a6d70',
              fontSize: '16px',
              cursor: 'pointer'
            }}
            component="div"
            onClick={handleOpen}
            ref={moreButton}>
            More
            <span style={{ paddingLeft: '8px' }} />
            <KeyboardArrowDownIcon
              className={(isOpenedMenu ? 'active' : '') + ' arrow_down_icon'}
              sx={{ fontSize: 24, width: 'auto', color: '#6A6D70' }}
            />
          </ListItem>
        )}
        <Menu
          className="menu-item_dropdown-menu"
          anchorEl={anchorEl}
          open={isOpenedMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}>
          {dropDownItems.map((_, index) => {
            return (
              <MenuItem key={index}>
                <Box>Menu Item</Box>
              </MenuItem>
            )
          })}
        </Menu>
      </List>
    </Box>
  )
}

export default Menuu
