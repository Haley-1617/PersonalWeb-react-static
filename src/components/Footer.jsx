import { React } from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(props) {
  const buttons = [
    <GitHubIcon fontSize={props.bp ? 'large' : 'default'} />,
    <LinkedInIcon fontSize={props.bp ? 'large' : 'default'} />,
    <FacebookIcon fontSize={props.bp ? 'large' : 'default'} />,
  ];
  const links = [
    'https://github.com/Haley-1617',
    'https://www.linkedin.com/in/haley-lai-040974197/',
    'https://www.facebook.com/profile.php?id=100000459401779',
  ];

  return (
    <Box style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
      <Container maxWidth='xs'>
        <Grid container spacing={0} justify='center' style={{ textAlign: 'center' }}>
          {buttons.map((button, ind) => {
            return (
              <Grid item xs={4} key={ind}>
                <IconButton href={links[ind]} target='_blank'>
                  {button}
                </IconButton>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Typography
              variant='h6'
              style={{
                flexWrap: 'wrap',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CopyrightIcon fontSize='small' />
              {new Date().getFullYear()} Haley Lai
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
