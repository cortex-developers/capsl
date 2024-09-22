import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import yael from './yael.jpg'
// Sample data for team members
const researchers = [

  {
    name: 'Nate Roy',
    headshot: 'https://via.placeholder.com/150',
    bio: 'Nate is dedicated to improving the experiences and lives of student-athletes',
    background: 'B.S Neurochemistry from Cornell University, MD/PhD & Linebacker @ McGill'
  },
  {
    name: 'Puneet Velidi',
    headshot: 'https://via.placeholder.com/150',
    bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S Statistics & Economics from Cornell University, Postbac @ MGH/Harvard Medical School'
  },
  // Add more researchers as needed
];

const coPIs = [
  {
    name: 'Dr. Memo Garibay, MD',
    headshot: 'https://via.placeholder.com/150',
    bio: 'Dr. Memo Garibay is our Co-PI specializing in neuroscience and advanced therapies for sports injury recovery.',
    background: 'MD from Universidad Anahuac, Research Fellow @ INNN.'
  },
  {
    name: 'Dr. Yael Ihejirika, MD',
    headshot: yael,
    bio: 'Dr. Yael Ihejirika is our Co-PI working on research with ligamentous injuries and rehabilitation science.',
    background: 'MD from SUNY Downstate Health Sciences University, General Surgery Resident @ SUNY Downstate Health Sciences University.'
  },
  // Add more Co-PIs as needed
];

const TeamPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Researchers Section */}
      <Box my={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Researchers
        </Typography>

        <Grid container spacing={4}>
          {researchers.map((researcher, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box textAlign="center">
                {/* Headshot */}
                <Box
                  component="img"
                  src={researcher.headshot}
                  alt={researcher.name}
                  sx={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    marginBottom: 2,
                  }}
                />
                {/* Bio and Background */}
                <Typography variant="h6" gutterBottom>
                  {researcher.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Bio:</strong> {researcher.bio}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Background:</strong> {researcher.background}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Co-PIs Section */}
      <Box my={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Co-PIs
        </Typography>

        <Grid container spacing={4}>
          {coPIs.map((coPI, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box textAlign="center">
                {/* Headshot */}
                <Box
                  component="img"
                  src={coPI.headshot}
                  alt={coPI.name}
                  sx={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    marginBottom: 2,
                  }}
                />
                {/* Bio and Background */}
                <Typography variant="h6" gutterBottom>
                  {coPI.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Bio:</strong> {coPI.bio}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Background:</strong> {coPI.background}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TeamPage;
