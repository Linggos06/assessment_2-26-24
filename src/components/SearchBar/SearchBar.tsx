import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Stack, Button, InputBase, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import './SearchBar.scss'

const SearchWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  marginLeft: 0
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: 'inherit',
  color: '#b0a695',
  '& .MuiInputBase-input': {
    width: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    paddingTop: 7,
    paddingLeft: 12,
    border: '1px solid #89919A',
    borderRight: 'none',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontSize: 16,
    color: '#74777A',
    transition: theme.transitions.create('width')
  }
}))

const StyledSelect = styled(Select)(() => ({
  maxWidth: '132px',
  width: '100%',
  fontSize: 14,
  lineHeight: 2,
  backgroundColor: '#F4F5F6',
  border: '1px solid #89919A',
  borderLeft: 'none',
  borderRadius: 0,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  boxShadow: 'none',
  textTransform: 'none',
  '& .MuiSelect-select': {
    paddingTop: 5,
    paddingBottom: 5,
    border: 'none'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  width: 110,
  height: 40,
  fontSize: 16,
  lineHeight: 2,
  paddingLeft: 13,
  backgroundColor: '#0059BC',
  border: '1px solid #0059BC',
  borderRadius: 5,
  marginLeft: 13,
  textAlign: 'center',
  boxShadow: 'none',
  textTransform: 'none',
  '.MuiButtonBase-root-MuiButton-root:hover': {
    opacity: 0.8,
    backgroundColor: '#c24b5a',
    boxShadow: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: 110,
    width: '100%',
    marginLeft: 13,
    fontSize: 16
  },
  [theme.breakpoints.down(481)]: {
    maxWidth: 110,
    width: '100%',
    marginLeft: 0,
    fontSize: 16,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  }
}))
const SearchBar = () => {
  const matchesMobile = useMediaQuery('(max-width:480px)')

  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedValue(event.target.value as string)
  }

  return (
    <Stack
      className="search_bar"
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={0}>
      <SearchWrapper>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{
            'aria-label': 'search'
          }}
        />
        {!matchesMobile && (
          <StyledSelect
            className="select_category"
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => {
              if (!selected) {
                return <em>Categories</em>
              }
              if (typeof selected === 'string') {
                return <em>{selected.length > 1 ? selected : 'Category Name'}</em>
              }
            }}
            IconComponent={KeyboardArrowDownIcon}>
            {[1, 2, 3, 4, 5].map((num, i) => {
              if (i === 0) {
                return (
                  <MenuItem key={num} value="Data">
                    Data
                  </MenuItem>
                )
              } else {
                return (
                  <MenuItem key={num} value={num + ''}>
                    Category Name
                  </MenuItem>
                )
              }
            })}
          </StyledSelect>
        )}
      </SearchWrapper>

      <StyledButton id="search_button" variant="contained">
        <SearchIcon />
      </StyledButton>
    </Stack>
  )
}

export default SearchBar
