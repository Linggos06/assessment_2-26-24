import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import './Footer.scss'

const Footer = () => {
  const breakpoint = useMediaQuery('(max-width:900px)')
  const matchesMobile = useMediaQuery('(max-width:600px)')
  return (
    <Grid container className="footer_container">
      <Grid container className="left_container">
        {/* Left Section */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: matchesMobile ? 'auto' : '370px',
            width: '100%',
            fontSize: '16px',
            fontWeight: '400',
            padding: '0 20px'
          }}>
          <Typography sx={{ pr: '24px', width: '170px', maxWidth: '100%' }}>
            <img src={'/logo.png'} alt="Logo" />
          </Typography>

          {!matchesMobile && (
            <Typography
              style={{ color: '#FFF', fontFamily: 'Roboto, sans-serif', marginTop: '27px' }}>
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
            </Typography>
          )}

          <Grid
            container
            style={{
              display: 'flex',
              marginTop: matchesMobile ? '35px' : '65px',
              height: '40px',
              overflow: 'hidden'
            }}>
            <Grid item>
              <TextField
                variant="outlined"
                className="email_input"
                placeholder="Email"
                size="small"
                fullWidth
                sx={{
                  flexGrow: 1,
                  flexShrink: matchesMobile ? 1 : 0,
                  width: matchesMobile ? '150px' : 'auto',
                  height: '40px',
                  backgroundColor: '#ffffff',
                  borderTopRightRadius: '0px',
                  borderBottomRightRadius: '0px'
                }}
              />
            </Grid>
            <Grid item>
              <Button
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  justifyContent: 'center',
                  backgroundColor: '#00254F',
                  borderTopLeftRadius: '0px',
                  borderBottomLeftRadius: '0px',
                  color: '#FFF',
                  padding: '12px 30px',
                  height: '40px'
                }}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section */}
        {!matchesMobile && (
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: breakpoint ? 'column' : 'row',
              flexBasis: breakpoint ? '20%' : '50%',
              flexShrink: 1,
              justifyContent: 'space-between',
              alignSelf: 'end',
              marginTop: '28px',
              padding: '0 20px'
            }}>
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  lineHeight: 'normal',
                  width: '41%',
                  marginLeft: '20px'
                }}>
                <Typography style={{ color: '#FFF', font: '500 24px Roboto, sans-serif' }}>
                  Title
                </Typography>

                {!breakpoint && (
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '24px',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      fontSize: '20px',
                      fontWeight: '400'
                    }}>
                    {[1, 2, 3, 4].map((_, i) => (
                      <Typography
                        key={i}
                        style={{
                          color: '#FFF',
                          font: '500 20px Roboto, sans-serif',
                          marginTop: '12px'
                        }}>
                        Subtitle
                      </Typography>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Grid>
        )}
      </Grid>
      <Divider
        style={{
          backgroundColor: '#D9D9D9',
          alignSelf: 'stretch',
          minHeight: '2px',
          marginTop: '62px',
          width: '100%'
        }}
      />

      {/* Contact Section */}
      <Grid
        container
        style={{
          display: 'flex',
          margin: '0 auto',
          marginTop: '21px',
          width: '100%',
          maxWidth: '1200px',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '0 20px'
        }}>
        <Grid
          item
          style={{
            color: '#FFF',
            flexGrow: '1',
            flexBasis: 'auto',
            fontSize: matchesMobile ? '12px' : '20px'
          }}>
          contact@nttdata.com
        </Grid>

        <Grid
          item
          style={{
            color: '#FFF',
            flexGrow: '1',
            flexBasis: 'auto',
            margin: 'auto 0',
            fontSize: matchesMobile ? '12px' : '20px',
            textAlign: matchesMobile ? 'right' : 'left'
          }}>
          +3 9876 765 444
        </Grid>
        {!matchesMobile && (
          <Grid item style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <InstagramIcon htmlColor="#ffffff" />
            <FacebookIcon htmlColor="#ffffff" />
            <LinkedInIcon htmlColor="#ffffff" />
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default Footer
