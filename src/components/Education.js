import React from 'react';
import { Typography, Box, Card, CardContent, Grid,  Stack, Link } from '@mui/material';
import { Avatar } from '@mui/material';
import useStyles from '../styles/styles';
import logoUniver from "../assets/images/logo-univer.png"

const Education = () => {
  const classes = useStyles();
  const params = [
    {
      id: 1,
      name: 'React',
      period: 'Sept - Dec 2022',
      program: 'https://app.rs.school/course/schedule?course=react-2022-q3',
      school:
        'The Rolling Scopes School (EPAM)',
      certificate:
        'https://app.rs.school/certificate/zkjsx0fj',
    },
    {
      id: 2,
      name: 'JavaScript/Frontend',
      period: 'Feb - Sept 2022',
      program: '',
      school:
        'The Rolling Scopes School (EPAM)',
      certificate:
        'https://app.rs.school/certificate/luop6hn0',
    },
  ];
  return (
    <Box
        id="education"
      sx={{
        flexGrow: 1,
        padding: '20px',
        minHeight: '400px',
        background: 'linear-gradient(LightSteelBlue, LightGrey)',
      }}
    >
      <Grid>
        <Typography variant="h4" sx={{ textAlign: 'center',  marginTop: '55px' }}>
          Education
        </Typography>
      </Grid>
      <Stack container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 0'}}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Web Development
        </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {params.map((param) => (
            <Grid item sm={12} md={4} key={param.id}>
              <Card className={classes.educationCard}>
                <CardContent>
                  <Link href="https://rs.school" target= "_blank" sx={{fontWeight: 'bold'}}>
                    {param.school}
                  </Link>
                  <Typography>{param.name}</Typography>
                  <Typography>{param.period}</Typography>
                  <Link href={param.certificate} target= "_blank">
                    Certificate
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          University
        </Typography>
        <Grid item sm={12} md={4}>
              <Card className={classes.educationCard}>
                <CardContent>
                  <Typography className={classes.educationStatement}>
                    1993-1998 Мурманский государственный технический университет
                  </Typography>
                  <Typography className={classes.educationStatement}>
                    Банковский менеджмент
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    <img
                      src={logoUniver}

                    />
                    <Box>
                      <Typography>{""}</Typography>
                      <Typography className={classes.educationPosition}>
                        {""}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
      </Stack>
    </Box>
  );
};

export default Education;