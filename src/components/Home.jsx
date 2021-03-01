import React from "react";
import {Container, Typography, Box} from "@material-ui/core/";
import Background from "../images/background.jpg";
import {Element} from "react-scroll";

export default function Home() {
  return (
    <div
      style={{background: `url(${Background}) no-repeat center center/cover`}}
    >
      <Element name='Home' />
      <Container style={{width: "100%", height: "100vh"}}>
        <Box
          height='85%'
          style={{
            position: "relative",
            top: 65,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant='h3'>
            Hi, This Is Haley Lai
            <br />
            Welcome To My Website
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
