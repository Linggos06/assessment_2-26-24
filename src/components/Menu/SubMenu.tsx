import styled from '@emotion/styled'
import { Box, Paper, Popover, Typography } from '@mui/material'

interface SubMenu {
  id: string | undefined
  open: boolean
  anchorEl: HTMLDivElement | null
  width: number
}

const Wrapper = styled(Box)({
  position: 'relative',
  zIndex: 3,
  maxWidth: '1000px',
  height: '300px',
  background: 'rgb(244, 245, 246)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#d9d9d9',
  borderRadius: '1px'
})

const Container = styled(Box)({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  boxSizing: 'border-box',
  backgroundColor: '#d9d9d9'
})

const Header = styled(Typography)({
  color: '#000000',
  textOverflow: 'ellipsis',
  fontSize: '14px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  textAlign: 'left'
})

const Subheader = styled(Typography)({
  color: '#000000',
  textOverflow: 'ellipsis',
  fontSize: '14px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  textAlign: 'left'
})

const Image = styled(Paper)({
  position: 'absolute',
  left: '376px',
  top: '30px',
  width: '776px',
  height: '240px',
  background: `url(/public/Submenu_image.jpg), rgb(217, 217, 217)`,
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundSize: 'cover, contain',
  backgroundPosition: 'center, center',
  borderRadius: '2px'
})
const Divider = styled(Box)({
  position: 'absolute',
  right: '0px',
  width: '48px',
  height: '300px',
  background: '#d9d9d9',
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundSize: 'cover, contain',
  backgroundPosition: 'center, center'
})

const SubMenu = ({ open, anchorEl, id, width }: SubMenu) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      sx={{
        pointerEvents: 'none',
        height: '300px'
      }}
      slotProps={{
        paper: {
          sx: {
            maxHeight: '100%',
            overflow: 'visible',
            overflowX: 'hidden'
          }
        }
      }}
      disableRestoreFocus>
      <Wrapper
        sx={{
          width: width + 'px'
        }}>
        <Container sx={{ left: '48px', top: '30px' }}>
          <Header variant="h6">Header</Header>
          {[...Array(7)].map((_, index) => (
            <Subheader key={index} variant="body2">
              Subheader
            </Subheader>
          ))}
        </Container>

        <Container sx={{ left: '211px', top: '30px' }}>
          <Header variant="h6">Header</Header>
          {[...Array(7)].map((_, index) => (
            <Subheader key={index} variant="body2">
              Subheader
            </Subheader>
          ))}
        </Container>
        <Image />
        <Divider />
      </Wrapper>
    </Popover>
  )
}

export default SubMenu
