import React, {useState} from "react";
import {makeStyles, Button, Typography, Box, Modal} from "@material-ui/core";
// import {Link} from "react-router-dom";
import "./Portfolio.scss";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   margin: 'auto',
  //   height: '100%',
  //   [theme.breakpoints.down('sm')]: {
  //     maxWidth: 250,
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     maxWidth: 345,
  //   },
  // },
  media: {
    position: "relative",
    width: "100%",
    height: "auto",
    borderRadius: "15px 15px 0 0",
  },
  button: {
    position: "relative",
    marginTop: 10,
    fontSize: "10px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default function PortfolioCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box className='card' onClick={handleOpen}>
        <img
          className={classes.media}
          src={`http://img.youtube.com/vi/${props.videoID}/mqdefault.jpg`}
          alt={props.title}
        />
        <Box className='card__content'>
          <Typography className='card__content-title'>
            <b>{props.title}</b>
          </Typography>
          <Box className='card__content-info'>
            <Typography
              variant='body2'
              style={{fontSize: "clamp(12px, 1vw, 14px)"}}
            >
              {props.description.length > 80
                ? props.description.substring(0, 80) + "..."
                : props.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <div className='modalCard'>
          <div className='modalCard__video'>
            <iframe
              src={`https://www.youtube.com/embed/${props.videoID}?autoplay=1`}
              frameBorder='0'
              allow='autoplay'
              allowFullScreen
              title={props.title}
            />
          </div>
          <div className='modalCard__info'>
            <div className='modalCard__title'>
              <b>{props.title}</b>
            </div>
            <div className='modalCard__description'>{props.description}</div>
            <span className='modalCard__info-date'>{props.date}</span>
            <span className='modalCard__info-tags'>{props.tags}</span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
