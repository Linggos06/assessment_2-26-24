import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

interface DrawerList {
  toggleDrawer: (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => void
}

const DrawerList = ({ toggleDrawer }: DrawerList) => {
  return (
    <Box
      sx={{ width: '100vw', mt: 10 }}
      role="presentation"
      component="div"
      onClick={toggleDrawer(false)}>
      <List>
        {[1, 2, 3, 4].map((text) => (
          <ListItem key={'Category' + text} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Category ' + text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )
}

export default DrawerList
