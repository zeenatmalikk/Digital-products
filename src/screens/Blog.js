import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "../CSS/Blog.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles(() => ({
  head_name: {
    fontFamily: "Lucida",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight:500
  },
  head: {
    fontFamily: "Lucida",
    fontSize: 36,
    textTransform: "capitalize",
    fontWeight:"bold"
  },
  photos: {
    fontFamily: "sans-serif",
    fontSize: 19,
    textTransform: "capitalize",
    paddingTop:24
  },
  desk: {
    // textAlign: "center",
    fontFamily:"Lucida",
    fontSize:24,
    fontWeight:"bold"
  },
  desk_sub:{
    maxWidth:300,
    // textAlign:"center",
    fontFamily:"Lucida",
    fontSize:17,
  }
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <div >
      <Container style={{ padding: 0, }}>
        <Grid container>
          <Grid item md={6} xs={12} style={{ paddingTop:9 }}>
            <Typography className={classes.head_name}>Our Blog</Typography>
            <Typography className={classes.head}>
              Enter our idea lab...
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography className={classes.photos}>See all Photos</Typography>
              <ArrowRightAltIcon
                style={{ fontSize: 28, position: "relative", bottom:-22 }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container  className="container-2">
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            lg={4}
            className="grid-2"
            
          >
            <img
              className="img-blog"
              src="https://cdn.dribbble.com/users/2811827/screenshots/15668035/media/cef54f0523db4fc32cafb06a90de8a50.png?compress=1&resize=1600x1200"
            ></img>

            <Typography className={classes.desk}>
              Our Plans for desk reciept
            </Typography>
            <Typography className={classes.desk_sub}>
              We have been busy behind the scenes working to build the future
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            lg={4}
            className="grid-2"
          >
            <img
              className="img-blog"
              src="https://cdn.dribbble.com/users/2811827/screenshots/15668035/media/cef54f0523db4fc32cafb06a90de8a50.png?compress=1&resize=1600x1200"
            ></img>
            <Typography className={classes.desk}>
              Shining a spotlight on our user
            </Typography>
            <Typography className={classes.desk_sub}>
              We have been busy behind the scenes working to build the future
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            lg={4}
            className="grid-2"
          >
            <img
              className="img-blog"
              src="https://cdn.dribbble.com/users/2811827/screenshots/15668035/media/cef54f0523db4fc32cafb06a90de8a50.png?compress=1&resize=1600x1200"
            ></img>
            <Typography className={classes.desk}>
              Manage your design tools
            </Typography>
            <Typography className={classes.desk_sub}>
              We have been busy behind the scenes working to build the future
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
