import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Research from './Research';
import Partners from './Partners';
import Team from './Team';
import logo from './logo.png';
import LandingPage from './LandingPage';
import './App.css';

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
            <Toolbar sx={{ height: '120px', justifyContent: 'space-between' }}>
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
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh', // Full viewport height
                    textAlign: 'center', // Center text
                  }}
                >
                  <Typography variant="h6">
                    Email{' '}
                    <a href="mailto:team@cortexflex.org" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      team@cortexflex.org
                    </a>{' '}
                    with your CV.
                  </Typography>
                </Box>
              } />
            <Route path="/collaborators" element={<Partners/>} />

          </Routes>

          <Box component="footer" sx={{ bgcolor: 'primary.main', py: 3, mt: 'auto' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">© {new Date().getFullYear()} CAPSuLe</Typography>
              <Typography variant="body2">Cortex Adolescent Performance Science Lab</Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
