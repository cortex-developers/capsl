import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import yael from './yael.jpg'
import vivek from './vivek.jpg'
import sanjay from './sanjay.jpeg'
import mya from './mya.jpg'
import tyler from './tyler.jpeg'
import ana from './ana.jpg'
import memo from './memo.png'
import sophia from './sophia.jpg'
import danielle from './danielle.png'
import anusri from './anusri.jpg'
import ramsey from './ramsey.png'
import puneet from './puneet.png'
import nate from './nate.png'
import kevin from './kevin.png'
import maya from './maya.png'
import isha from './isha.jpeg'
// Sample data for team members
const researchers = [

  {
    name: 'Nate Roy',
    headshot: nate,
    //bio: 'Nate is dedicated to improving the experiences and lives of student-athletes',
    background: 'B.S Neurochemistry from Cornell University, PhD Student @ McGill'
  },
  {
    name: 'Puneet Velidi',
    headshot: puneet,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.A Statistics & Economics from Cornell University, MSc Student @ University of Victoria'
  },
  {
    name: 'Dr. Yael Ihejirika, MD',
    headshot: yael,
    //bio: 'Dr. Yael Ihejirika is our Co-PI working on research with ligamentous injuries and rehabilitation science.',
    background: 'MD from SUNY Downstate, General Surgery Resident @ SUNY Downstate.'
  },
  {
    name: 'Dr. Maya Haykal, MD',
    headshot: maya,
    //bio: 'Dr. Maya Haykal is our Co-PI working on research with ligamentous injuries and rehabilitation science.',
    background: 'MD from SUNY Upstate, PM&R Resident @ Johns Hopkins.'
  },
  {
    name: 'Dr. Anusri Pakhare, MD',
    headshot: anusri,
    //bio: 'Dr. Memo Garibay is our Co-PI specializing in neuroscience and advanced therapies for sports injury recovery.',
    background: 'MD from Shandong First Medical University'
  },
  {
    name: 'Dr. Memo Garibay, MD',
    headshot: memo,
    //bio: 'Dr. Memo Garibay is our Co-PI specializing in neuroscience and advanced therapies for sports injury recovery.',
    background: 'MD from Universidad Anahuac, Research Fellow @ INNN.'
  },
  {
    name: 'Tyler Thiele, DPT',
    headshot: tyler,
    //bio: 'Dr. Maya Haykal is our Co-PI working on research with ligamentous injuries and rehabilitation science.',
    background: 'DPT from Ithaca College, Physical Therapist @ FOX Rehabilitation.'
  },
  {
    name: 'Ana Radanovic, MSc',
    headshot: ana,
    //bio: 'Dr. Memo Garibay is our Co-PI specializing in neuroscience and advanced therapies for sports injury recovery.',
    background: 'MSc from University of Amsterdam, Neuroscience PhD Student @ Weill Cornell Medicine.'
  },

  
  {
    name: 'Danielle Vitale',
    headshot: danielle,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S Biochemistry from Providence College, 4th Year Medical Student @ Upstate Medical University'
  },
  {
    name: 'Mya Murray',
    headshot: mya,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.A Biology from Brown University, MPH Student @ Robert Morris University'
  },
  {
    name: 'Vivek Khatri',
    headshot: vivek,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S Biology from University of Virginia, 2nd Year Dental Student @ Columbia'
  },
  {
    name: 'Ramsey Kubofcik',
    headshot: ramsey,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S HBHS Student @ Cornell University'
  },
  {
    name: 'Sophia Simenz',
    headshot: sophia,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S Neuroscience Student @ Columbia'
  },
  {
    name: 'Sanjay Kumar',
    headshot: sanjay,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S Neuroscience Student @ Rutgers'
  },
  {
    name: 'Kevin Wisniewski',
    headshot: kevin,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'B.S Biomedical Sciences from University of South Florida, 2nd Year Medical Student @ LECOM'
  },
  {
    name: 'Isha Sudhir',
    headshot: isha,
    //bio: 'Puneet is a software engineer who is dedicated to use neuroimaging and neuroscience to improve health outcomes for athletes.',
    background: 'Dual-enrollment Student @ Bellvue College'
  },


  // Add more researchers as needed
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
{/*                 <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Bio:</strong> {researcher.bio}
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  <strong>Background:</strong> {researcher.background}
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
