import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

const Research = () => {
  const sections = [
    {
      header: "Positive Stimuli for Adolescents",
      image: "https://via.placeholder.com/500",
      description: "We are interested in researching positive stimuli for adolescents that help determine sucessful and positive growth trajectories. To that end, sports have been proven to be one of the most impactful if not the most impactful positive stimuli that adolescents can experience. We aim to characterize and better understand the impact of these stimuli."
    },
    {
      header: "Sports Injury and Recovery",
      image: "https://via.placeholder.com/500",
      description: "Research on sports injury and recovery has advanced greatly in recent years due to modern medicine, but a disconnect between the athletic and medical communities has led to ineffective and in many cases unnecesary procedures perfomred on athletes. We aim to research up-to-date therapies and the effectiveness of various sport injury recovery protocols."
    },
    {
      header: "Athletic Performance Optimization",
      image: "https://via.placeholder.com/500",
      description: "How can athletes improve their performance? What sort of protocols prove to be the most beneficial in making athletes stronger, faster, smarter, and more resilient. We are in interested in what makes a better athlete."
    }
  ];

  return (
    <Container maxWidth="lg">
      {sections.map((section, index) => (
        <Box my={4} key={index}>
          {/* Section Header */}
          <Typography variant="h4" align="center" gutterBottom>
            {section.header}
          </Typography>

          {/* Picture with Description */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box component="img"
                   src={section.image}
                   alt={`Section ${index + 1}`}
                   width="100%"
                   sx={{ borderRadius: '8px' }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                {section.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Research;
