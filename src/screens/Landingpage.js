import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "../CSS/Landing.css";

const useStyles = makeStyles(() => ({
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
        maxWidth: 490,
        color:"#A9AED7"
      },
}));

const Landingpage = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:"#F2E6DD"}}>
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
      <Container style={{  padding: 0 }}>
        <Grid container style={{ backgroundColor: "blue" }}>
          <Grid style={{ backgroundColor: "pink",alignContent:"center", justifyContent:"center", display:"flex", backgroundColor:"green", flexDirection:"column", alignItems:"center", textAlign:"center",  }} item md={12} xs={12}>
            
           
          </Grid>
          </Grid>
          <Grid container>
              <Grid item md={12}>
              {/* <div style={{alignContent:"center", justifyContent:"center", display:"flex", backgroundColor:"greenyellow", width:340, alignItems:"center"}}> */}
                <img className="img-landing" src="https://cdn.dribbble.com/users/1090020/screenshots/14073692/media/d56030d03319818f9a9bd1b1c8152dae.png?compress=1&resize=1600x1200"/>
            {/* </div> */}
              </Grid>
          </Grid>
       
      </Container>
    </div>
  );
};

export default Landingpage;
