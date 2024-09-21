import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#000' },
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
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Button color="inherit" component={RouterLink} to="/">               <Typography variant="h6" component="div">
              CAPSL
              </Typography>

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
            <Route path="/research" element={<div>Research Content</div>} />
            <Route path="/team" element={<div>Team Content</div>} />
            <Route path="/join" element={<div>Join Us Content</div>} />
            <Route path="/collaborators" element={<div>Join Us Content</div>} />

          </Routes>

          <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">© {new Date().getFullYear()} CAPSL</Typography>
              <Typography variant="body2">Cortex Adolescent Performance Science Lab</Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
