import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/Scholars.jpg";
import { NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" component={NavLink} to={"/"}>
        FMS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& h1": {
      color: "brown",
    },
    "& h2": {
      color: "darkgoldenrod",
    },

    height: "100vh",
    marginTop:"100px",
    marginBottom:"30px",
    backgroundColor:"primary"
  },
  image: {
    backgroundImage: `url(${Image})`,
       backgroundRepeat: 'no-repeat',
       backgroundColor:
         theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
       backgroundSize: 'cover',
       backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
 
 
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box>
      <style>{"body { background: linear-gradient(#CCFF99,#FF99FF); }"}</style>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.image} m={20} />
        <Grid item sm={6}>
          <div className={classes.paper}>
            <h1>ABOUT US</h1>
            <h2>Welcome to Courses!</h2>
            <form className={classes.form} noValidate>
              <Typography align="justify">
                {" "}
                We are the Largest online course Provider in Hyderabad since
                2006. We started running the online training from 2021 and we
                open the new training batch this year. Now, 100 faculties and
                150 supporting staff work together and always support about 10
                thousand participants, the best thing about this app is the ease
                at which user can access it.
              </Typography>
              <br />
              <Typography align="justify">
                All of our courses are certification courses. That means we have
                enough power to support participants and satisfactory track
                records of participants.
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
      <Copyright />
    </Box>
  );
}