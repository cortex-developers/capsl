import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import positive from './positivestimuli.jpg';
import project1 from './tbi.png'; // Example project image 1
import project2 from './rehab.jpg'; // Example project image 2
import project3 from './hardship.jpg'; // Example project image 3
import project4 from './mind.jpg'; // Example project image 3

const Research = () => {
  const sections = [
    {
      header: "Positive Stimuli for Adolescents",
      image: positive,
      description: `Adolescence is a critical period for both neurological and physical development. Pressure to perform is high in the adolescent years. Short term outcomes in this window are often determinants of longer term opportunities. Adolescents face a multitude of stressors associated with development which can have long term effects in altering the adolescent's environment and developmental progression.
We are interested in understanding every aspect of this trajectory. On the one hand, we seek a mechanistic understanding of experiences and stimuli that limit or withhold proper development. On the other, we aim to identify and understand stimuli that augment health and performance outcomes for adolescents in their current life period as well as in adulthood.
With an interdisciplinary team of researchers and physicians, The CAPSuLe is working to build a holistic understanding of development that informs the work of teachers, coaches, and mentors as we work together to build a healthier future.`
    },
  ];

  // Current projects array with images
  const currentProjects = [
    { title: 'Project 1', image: project1 },
    { title: 'Project 2', image: project2 },
    { title: 'Project 3', image: project3 },
    { title: 'Project 4', image: project4 },
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

      {/* Current Projects Section */}
      <Box my={6}>
        {/* Current Projects Title */}
        <Typography variant="h4" align="center" gutterBottom>
          Current Projects
        </Typography>

        {/* Current Projects Subtitle */}
        <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
          We are working on meta-analyses, systematic reviews, survey research, and literature reviews.
        </Typography>

        {/* Horizontal Gallery */}
        <Grid container spacing={2} justifyContent="center">
          {currentProjects.map((project, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                width="100%"
                sx={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
{/*               <Typography variant="body1" align="center" mt={2}>
                {project.title}
              </Typography> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Research;
