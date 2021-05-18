import {
  Container,
  makeStyles,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@material-ui/core";
import ItemsCarousel from "react-items-carousel"; 
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import "../CSS/Platform.css";
import Rating from '@material-ui/lab/Rating';
import { useState } from "react";

const data = [
  {
    desc: "you are not only gettting outstanding work with canvas , you are getting smart creative partner. they gave us their part",
  },
  {
    desc: "you are not only gettting outstanding work with canvas , you are getting smart creative partner. they gave us their part",
  },
  {
    desc: "you are not only gettting outstanding work with canvas , you are getting smart creative partner. they gave us their part",
  },
  {
    desc: "you are not only gettting outstanding work with canvas , you are getting smart creative partner. they gave us their part",
  },
  {
    desc: "you are not only gettting outstanding work with canvas , you are getting smart creative partner. they gave us their part",
  },
];

const useStyles = makeStyles(() => ({
  head: {
    fontFamily: "Arial",
    fontSize: "42px",
    // textAlign:"justify",
    padding: "5px 0 5px 0",
    // maxWidth: 360,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },
  head_name: {
    fontFamily: "Arial",
    fontSize: "22px",
    // textAlign:"justify",
    textAlign: "center",
    padding: "10px 0 0px 0",
    // maxWidth: 360,
  },
  rev: {
    textAlign: "left",
    maxWidth: 390,
    fontSize: 19,
    fontWeight: "bold",
  },
}));

const Platform = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <Typography className={classes.head_name}>Testimonials</Typography>
      <Typography className={classes.head}>
        Why our people loves our platform
      </Typography>
      <Container style={{ backgroundColor: "pink" }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={<button>{<ArrowBackIcon />}</button>}
          rightChevron={<button>{<ArrowForwardIcon />}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
          disableSwipe={true}
        >
          {data.map((o) => (
            <div>
              <Grid container>
                <Grid item md={12} xs={12}>
                <Card>
                <CardContent>
                  
                  <q style={{ fontSize: 32 }}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                    <Typography className={classes.rev}>{o.desc}</Typography>
                  </q>
                </CardContent>
              </Card>
                </Grid>
              </Grid>
            </div>
          ))}
        </ItemsCarousel>
      </Container>
    </div>
  );
};

export default Platform;
