import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Container, Typography, Box, Fab, useTheme, useMediaQuery } from '@material-ui/core/';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import ContactFrom from './ContactForm';
import PortfolioSec from './PortfolioSec';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 'calc(10px + 1vw)',
    lineHeight: 2,
    position: 'relative',
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function SmoothScroll() {
  scroller.scrollTo('Home', {
    duration: 1500,
    smooth: 'easeInOutQuart',
  });
}

export default function Section(props) {
  const classes = useStyles();
  const themebp = useTheme();
  const bp = useMediaQuery(themebp.breakpoints.up('sm'));
  return (
    <Box style={{ background: `url(${props.background})` }}>
      <Container className='section'>
        <Element name={props.name} />
        <Box height='85%' width='90%' style={{ position: 'relative', top: 65, left: '5%' }}>
          <ThemeProvider theme={theme}>
            <Typography variant={bp ? 'h2' : 'h3'}>{props.name}</Typography>
            <Typography
              className={classes.root}
              variant={bp ? 'h5' : 'h4'}
              dangerouslySetInnerHTML={{ __html: props.content }}
            ></Typography>
            {props.name === 'Portfolio' && <PortfolioSec bp={bp} />}
            {props.name === 'Contact' && <ContactFrom bp={bp} />}
          </ThemeProvider>
        </Box>
        {props.name === 'Contact' && (
          <>
            <Footer bp={bp} />
            <Fab
              style={{ position: 'absolute', bottom: 'calc(5px + 1vw)', right: 'calc(5px + 1vw)' }}
              onClick={SmoothScroll}
              size={bp ? 'default' : 'small'}
            >
              <ExpandLessIcon />
            </Fab>
          </>
        )}
      </Container>
    </Box>
  );
}
