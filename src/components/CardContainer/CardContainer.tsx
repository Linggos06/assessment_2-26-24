import { useSelector } from 'react-redux'
import { selectCards } from '../../config/store/cardsSlice'
import { Grid, LinearProgress, Typography } from '@mui/material'
import ProductCard from '../ProductCard'

const CardContainer = () => {
  const { entities: cards, loading } = useSelector(selectCards)

  if (loading === 'pending') {
    return <LinearProgress />
  }
  if (cards.length === 0) {
    return <Typography align="center">Sorry, no matching results found</Typography>
  }

  return (
    <Grid container spacing={4} justifyContent={'center'}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <ProductCard {...card} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardContainer
