import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from './different_sports.jpg'
const theme = createTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#007bff' },
    background: { default: '#f4f4f9' },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '80vh', // Adjust this based on space between navbar and footer
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          // Adding a semi-transparent overlay
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency for readability
            zIndex: 1,
          },
          color: 'white', // White text to contrast against the dark overlay
          zIndex: 2, // Ensures the content stays above the overlay
        }}
      >
        <Container sx={{ zIndex: 2, position: 'relative' }}>
          {/* Main Header */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              marginBottom: '1rem',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // Text shadow to enhance readability
            }}
          >
            Welcome to CAPSuLe
          </Typography>

          {/* Subheader */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: '300',
              marginBottom: '2rem',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            Researching the Adolescent Experience & Performance
          </Typography>

          {/* Mission Statement */}
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            CAPSuLe is an Independent Research Organization (IRO) dedicated to investigating the adolescent experience and performance. While we are affiliated with{' '}
            <Typography component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}> Cortex Flex</Typography>, we operate as a 501(c)(3) non-profit organization. 

            In addition to our research, we aim to translate the science we publish into accessible versions for athletes and the general public through{' '}
            <Typography component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}> theCAPSuLe</Typography>, our educational initiative.
          </Typography>

          {/* Call to Action Buttons */}
          <Box sx={{ marginTop: '2rem' }}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/our-research"
              sx={{
                padding: '12px 24px',
                fontSize: '1.2rem',
                marginRight: '16px',
                backgroundColor: '#FFD700', // Gold color for contrast
                color: '#000',
                '&:hover': { backgroundColor: '#E0B800' }, // Darker shade on hover
              }}
            >
              Explore Our Research
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/join"
              sx={{
                padding: '12px 24px',
                fontSize: '1.2rem',
                marginLeft: '16px',
                borderColor: '#FFD700',
                color: '#FFD700',
                '&:hover': { backgroundColor: 'rgba(255, 215, 0, 0.2)', borderColor: '#FFD700' },
              }}
            >
              Get Involved
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;
