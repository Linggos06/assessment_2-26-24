import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './config/store/store'
import { fetchCards } from './config/store/cardsSlice'
import { CssBaseline, Container, Box } from '@mui/material'
import Header from './components/Header'
import CardContainer from './components/CardContainer'

import './App.scss'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        />
        <Container sx={{ py: 8 }} maxWidth="md">
          <CardContainer />
        </Container>
      </main>
    </>
  )
}

export default App
