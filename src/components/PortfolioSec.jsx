import React from "react";
import {Container, Box, makeStyles, Grid} from "@material-ui/core/";
import PortfolioCard from "./PortfolioCard";
import projects from "../Data/PortfolioData";
import LaunchIcon from "@material-ui/icons/Launch";
import Portfolio from "../pdf/Portfolio.pdf";
import "./Portfolio.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
  },
  container: {
    padding: "30px 0 100px 0",
  },
});

export default function PortfolioSec(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <a
        className='header__item-box'
        href={Portfolio}
        target='_blank'
        rel='noreferrer'
      >
        <LaunchIcon fontSize='small' />
        <span>PDF Ver.</span>
      </a>
      <Container className={classes.container}>
        <Grid container spacing={7}>
          {projects.map((value) => (
            <Grid item xs={12} sm={6} md={4}>
              <PortfolioCard
                key={value.id}
                date={value.date}
                description={value.description}
                tags={value.tags}
                title={value.title}
                type={value.type}
                videoID={value.videoID}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
