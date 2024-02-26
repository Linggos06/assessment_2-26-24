import { Box } from '@mui/material'
import Slider from 'react-slick'

import './Hero.scss'

const Hero = () => {
  const settings = {
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    appendDots: (dots: any) => (
      <>
        <ul className="hero_slick_dots slick_dots">{dots}</ul>
      </>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Box className="slider_container">
      <Slider className="hero_slick_slider" {...settings}>
        {[1, 2, 3, 4].map((num) => (
          <Box
            key={num}
            className="img_card"
            component="img"
            src={`/public/Group${num}_1440.jpg`}
            srcSet={`/public/Group${num}_480.jpg 480w, /public/Group${num}_768.jpg 768w, /public/Group${num}_1440.jpg 1280w`}
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
            alt="Slider image"
          />
        ))}
      </Slider>
      <Box className="dots_container" component="div" />
    </Box>
  )
}

export default Hero
