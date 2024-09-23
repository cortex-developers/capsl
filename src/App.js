import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, Grid } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Research from './Research';
import Partners from './Partners';
import Team from './Team';
import logo from './logo.png';
import LandingPage from './LandingPage';
import './App.css';
import galleryImage1 from './boys.jpg'; // Replace with your image paths
import galleryImage2 from './mayastretch.png';
import galleryImage3 from './mayayoga.png';

const theme = createTheme({
  palette: {
    primary: { main: '#fff' },
    secondary: { main: '#007bff' },
    background: { default: '#fff' },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
      <ListItem button component={RouterLink} to="/">
          <Button color="inherit">Home</Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/research">
          <Button color="inherit">Our Research</Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/team">
          <Button color="inherit">Our Team</Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/collaborators">
          <Button color="inherit">Our Collaborators</Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/join">
          <Button color="inherit">Join Us</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <AppBar position="static">
            <Toolbar sx={{ height: '120px'}}>
              <Button color="inherit" component={RouterLink} to="/">             
              <img 
        src={logo} 
        alt="Logo" 
        style={{ height: '100px', width: 'auto' }} // Adjust the height as needed
      />
              </Button>

              {isMobile ? (
                <>
                  <IconButton color="inherit" onClick={handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer anchor="right" open={mobileMenuOpen} onClose={handleDrawerToggle}>
                    {drawer}
                  </Drawer>
                </>
              ) : (
                <Box>
                  <Button color="inherit" component={RouterLink} to="/">Home</Button>
                  <Button color="inherit" component={RouterLink} to="/research">Our Research</Button>
                  <Button color="inherit" component={RouterLink} to="/team">Our Team</Button>
                  <Button color="inherit" component={RouterLink} to="/collaborators">Our Collaborators</Button>
                  <Button color="inherit" component={RouterLink} to="/join">Join Us</Button>
                </Box>
              )}
            </Toolbar>
          </AppBar>

          <Routes>
          <Route path="/" element={<LandingPage/>} />
            <Route path="/research" element={<Research/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/join"               element={
              <Box>
      {/* Photo Gallery */}
      <Box sx={{ padding: '2rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '12px',
        }}
      >
        <Box sx={{ marginBottom: '50px'}}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
            Join Our Team
          </Typography>
          <Typography variant="h6" sx={{ color: '#555' }}>
            Email{' '}
            <a
              href="mailto:team@cortexflex.org"
              style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              team@cortexflex.org
            </a>{' '}
            with your CV.
          </Typography>
        </Box>
      </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src={galleryImage1}
              alt="Gallery Image 1"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src={galleryImage2}
              alt="Gallery Image 2"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src={galleryImage3}
              alt="Gallery Image 3"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Join Section */}

    </Box>
              } />
            <Route path="/collaborators" element={<Partners/>} />

          </Routes>

          <Box component="footer" sx={{ bgcolor: 'primary.main', py: 3, mt: 'auto' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">© {new Date().getFullYear()} The CAPSuLe</Typography>
              <Typography variant="body2">Cortex Adolescent Performance Science Lab</Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
