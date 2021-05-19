import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "../CSS/Landing.css";

const useStyles = makeStyles(() => ({
  heading: {
    width: "400px",
    fontFamily: "Times New Roman",
    fontSize: 39,
    textAlign: "center",
  },
  heading_name: {
    width: "400px",
    fontFamily: "Times New Roman",
    fontSize: 19,
    textAlign: "center",
  },
  canvas: {
    fontFamily: "Lucida",
    fontSize: 29,
    textAlign: "center",
    paddingTop: 8,
    fontWeight: "bold",
  },
}));

const Landingpage = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Grid container style={{ backgroundColor: "whitesmoke", height: "8vh" }}>
        <Grid item md={3} xs={3}>
          <nav>
            <Typography className={classes.canvas}>Canva Creations</Typography>
          </nav>
        </Grid>
        <Grid item md={5} xs={1} />
        <Grid item md={4} xs={2}>
          <div className="nav">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Blog</li>
              <li>About</li>
              <Button className="btn" variant="outlined">
                contact
              </Button>
            </ul>
          </div>
        </Grid>
      </Grid> */}
      <Container style={{  padding: 0 , }}>
        <Grid
          container
          style={{
            padding: 0,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={12} xs={12} sm={12}>
            <Typography className={classes.heading}>
              We craft digital products for your buiseness
            </Typography>
            <Typography className={classes.heading_name}>
              Canva co. is a visual branding and design agency. we partner with
              brands to bring their stories to life
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sm={12}
         
        >
          <div style={{width: "100%",justifyContent: "center",
            alignContent: "center",
            display: "flex", }}>
        <img style={{height:"180px"}} src="https://cdn.dribbble.com/users/115364/screenshots/13449013/media/f00f52b2c2bbf158540f29c530660574.jpg?compress=1&resize=1600x1200"/>
            
            
            </div>{" "}
        </Grid>
      </Container>
    </div>
  );
};

export default Landingpage;
