import {
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "../CSS/Services.css";

const useStyles = makeStyles(() => ({
  branding: {
    fontFamily: "arial",
    fontWeight: "bolder",
    fontSize: 26,
    padding: "5px ",
    marginblockstart: 0,
    marginblockend: 0,
  },
  branding_sub: {
    fontFamily: "arial",
    fontWeight: 600,
    fontSize: 18,
    padding: "5px ",
  },
  heading: {
    textAlign: "center",
    fontSize: 48,
    paddingTop: "15px",
    paddingBottom: "15px",
    fontWeight:550,
    // marginblockend: 0,
    // marginblockstart: 0,
    maxWidth: 450,
  },
  heading_name: {
    textAlign: "center",
    fontSize: 22,
    paddingTop: "15px",
    fontWeight:"bold",
    marginblockend: 0,
    marginblockstart: 0,
    maxWidth: 450,
    color:"#A9AED7"
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div >
        
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignContent: "center",
          alignItems:"center",
          
        }}
      >
          <Typography className={classes.heading_name}>
              Services
          </Typography>
        <Typography className={classes.heading} variant="h3">
          We help bring your stories to life
        </Typography>
      </div>

      <Container style={{ padding: 0, }}>
        <Grid container className="servicecont" >
          <Grid item md={4} xs={12} className="card1">
            {/* <Card className="card-services">
              <Card container> */}
            <div className="card1-services">
              <img
                className="card1-img"
                src="https://img-premium.flaticon.com/png/512/3079/3079022.png?token=exp=1621249987~hmac=9d1a0ba5d657355706f7401ca5cee797"
              />
              <Typography variant="h5" className={classes.branding}>
                Branding strategy
              </Typography>
              <Typography variant="h5" className={classes.branding_sub}>
                Excellence in all that we do in buiseness development technology
              </Typography>
            </div>
            {/* </Card>
            </Card> */}
          </Grid>
          <Grid item md={4} xs={12} className="card2">
            {/* <Card className="card-services">
              <Card container> */}
            <div className="card2-services">
              <img
                className="card1-img"
                src="https://img-premium.flaticon.com/png/512/3079/3079022.png?token=exp=1621249987~hmac=9d1a0ba5d657355706f7401ca5cee797"
              />
              <Typography variant="h5" className={classes.branding}>
                Design
              </Typography>
              <Typography variant="h5" className={classes.branding_sub}>
                Excellence in all that we do in buiseness development technology
              </Typography>
            </div>
            {/* </Card>
            </Card> */}
          </Grid>
          <Grid item md={4} xs={12} className="card3">
            {/* <Card className="card-services"> */}
            {/* <Card container> */}
            <div className="card-services">
              <img
                className="card1-img"
                src="https://img-premium.flaticon.com/png/512/3079/3079022.png?token=exp=1621249987~hmac=9d1a0ba5d657355706f7401ca5cee797"
              />
              <Typography variant="h5" className={classes.branding}>
                Development
              </Typography>
              <Typography variant="h5" className={classes.branding_sub}>
               We always study and utilize the latest development strategies
              </Typography>
            </div>
            {/* </Card> */}
            {/* </Card> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
