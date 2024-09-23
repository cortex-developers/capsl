import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import coco from './coco.png'
import flores from './flores.svg'
import cortex from './cortex.png'
// Sample data for partner logos and descriptions
const partners = [
  {
    name: 'Flores Lab @ McGill',
    logo: flores,
    description: ''
  },
  {
    name: 'Computational Connectomics Lab @ Cornell',
    logo: coco,
    description: ''
  },
  {
    name: 'Cortex Flex',
    logo: cortex,
    description: ''
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      {/* Main Title */}
      <Typography variant="h4" gutterBottom align="center">
        Our Collaborators
      </Typography>

      {/* Subtitle */}
      <Typography variant="h6" gutterBottom align="center" color="textSecondary">
        We are grateful to work with a wide network of awesome collaborators!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            {/* Partner Logo */}
            <Box
              component="img"
              sx={{
                maxHeight: '70%',
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              src={partner.logo}
              alt={partner.name}
            />

            {/* Partner Name */}
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              {partner.name}
            </Typography>

            {/* Partner Description */}
            <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 1 }}>
              {partner.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
