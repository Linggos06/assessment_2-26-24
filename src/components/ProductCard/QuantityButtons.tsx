import { Button, ButtonGroup, CardActions, Stack } from '@mui/material'

type QuantityButtonsType = {
  itemCount: number
  handleIncrement: () => void
  handleDecrement: () => void
}

const QuantityButtons = ({ itemCount, handleIncrement, handleDecrement }: QuantityButtonsType) => {
  const displayCount = itemCount > 0
  return (
    <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <Stack direction="row" justifyContent="center" alignItems="flex-end" spacing={0}>
        <ButtonGroup
          className="quantity_buttons_group"
          size="small"
          aria-label="small vertical outlined button group"
          orientation="vertical">
          {displayCount && (
            <Button
              className="quantity_buttons_group_button decrement_button"
              variant="outlined"
              onClick={handleDecrement}>
              -
            </Button>
          )}
          {displayCount && (
            <Button className="quantity_buttons_group_button" disabled variant="text">
              {itemCount}
            </Button>
          )}
          <Button className="quantity_buttons_group_button" onClick={handleIncrement}>
            +
          </Button>
        </ButtonGroup>
      </Stack>
    </CardActions>
  )
}

export default QuantityButtons
