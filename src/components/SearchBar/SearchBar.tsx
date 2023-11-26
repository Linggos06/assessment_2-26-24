import { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../config/store/store'
import { fetchCardsByName, selectCards } from '../../config/store/cardsSlice'
import { Stack, Button, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

import './SearchBar.scss'

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: 450,
  width: '100%',
  marginLeft: 0,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3)
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  color: '#b0a695',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: 'inherit',
  color: '#b0a695',
  '& .MuiInputBase-input': {
    width: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 18,
    border: '1px solid #dadada',
    borderRight: 'none',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`
    }
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  width: 60,
  fontSize: 12,
  lineHeight: 2,
  paddingTop: 7,
  paddingBottom: 8,
  backgroundColor: '#c24b5a',
  border: '1px solid #c24b5a',
  borderRadius: 0,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  boxShadow: 'none',
  textTransform: 'none',
  '.MuiButtonBase-root-MuiButton-root:hover': {
    opacity: 0.8,
    backgroundColor: '#c24b5a',
    boxShadow: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: 150,
    width: '100%',
    paddingTop: 6,
    paddingBottom: 5,
    fontSize: 14
  }
}))
const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector(selectCards)

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSearch = () => {
    if (!inputValue) return
    dispatch(fetchCardsByName(inputValue))
  }
  return (
    <Stack
      className="search_bar"
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={0}>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{
            'aria-label': 'search'
          }}
          onChange={handleChange}
        />
      </SearchWrapper>
      <StyledButton
        id="search_button"
        variant="contained"
        onClick={handleSearch}
        disabled={loading === 'pending'}>
        Search
      </StyledButton>
    </Stack>
  )
}

export default SearchBar
