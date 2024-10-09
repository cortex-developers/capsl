import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Collapse, IconButton } from '@mui/material';
import PlusIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import positive from './positivestimuli.jpg';
import project2 from './rehab.jpg';
import project3 from './hardship.jpg';
import project4 from './mind.jpg';
import ivy from './ivy.jpg';
import eeg from './EEG-recording.png';
import tbi from './tbi.jpg'
import group from './202234-individualism-vs-teamwork.jpg'
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

  const currentProjects = [
    { title: 'TBI Voxel-based Morphometry Review', image: tbi, description: 'The aim is to examine the changes in grey matter volume after traumatic brain injury using Voxel-based Morphometry that are found in the literature.' },
    { title: 'Adolescent Hardship Survey', image: project3, description: 'The aim of this survey is to identify the positive stimuli that adolescents are lacking in their lives and observe if there is any correlation with their general life satisfaction.' },
    { title: 'Ivy League Athlete Household Survey', image: ivy, description: 'The aim of this survey is to identify and understand the factors differentiating household environments of Ivy League student-athletes compared to non-athletes in similar academic settings. This project aims to explore how family environment, cultural influences, lifestyle habits, and psychosocial development shape the experiences and outcomes of student-athletes versus their peers using validated psychological and sociological scales.' },
    { title: 'Individual vs Group Intervention Meta', image: group, description: 'The aim is to synthesize existing research comparing individual and group interventions in therapy, coaching, training, and teaching to understand their relative effectiveness across different domains. This meta-analysis will evaluate how individual and group formats impact mental health outcomes, skill acquisition, behavioral changes, and participant satisfaction.' },
    { title: 'Time Loss after Injury Review', image: project2, description: 'The aim of this review is to examine how time loss after injury affects performance and recovery outcomes.' },
    { title: 'Effect of Mindfulness on Performance Meta', image: project4, description: 'The aim of this meta-analysis is to examine the effect of mindfulness as an intervention in performance outcomes for athletes.' },
    { title: 'Sleep Deprivation Gamma Power Meta', image: eeg, description: 'The aim is to provide a comprehensive analysis of how sleep deprivation influences gamma oscillations across various populations and its impact on cognitive functions, emotional regulation, and overall neural processing.' },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Container maxWidth="lg">
      {sections.map((section, index) => (
        <Box my={4} key={index}>
          <Typography variant="h4" align="center" gutterBottom>
            {section.header}
          </Typography>

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

      <Box my={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Current Projects
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {currentProjects.map((project, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <Box position="relative">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '200px',
                    }}
                  />
                  <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ color: '#fff' }}
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>

              <Collapse in={expanded === index}>
                <Box mt={2} px={2}>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                </Box>
              </Collapse>

              <IconButton
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded === index}
                aria-label="toggle expand"
                sx={{ display: 'block', margin: '0 auto' }}
              >
                {expanded === index ? <RemoveCircleOutlineIcon /> : <PlusIcon />}
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Research;
