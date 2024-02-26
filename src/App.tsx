import { CssBaseline, useMediaQuery } from '@mui/material'
import Header from './components/Header'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

import './App.scss'

const App = () => {
  const matchesMobile = useMediaQuery('(max-width:480px)')

  return (
    <>
      <CssBaseline />
      <Header />
      {!matchesMobile && <Menu />}
      <Hero />
      <Products />
      <Footer />
    </>
  )
}

export default App
