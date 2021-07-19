import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../src/img/about-us.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& h1': {
      color: 'brown',
    },
    '& h2': {
      color: 'darkgoldenrod'
    },

    height: '100vh',
  },
  // image: {
  //   backgroundImage: `url(${Image})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundColor:
  //     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),


  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  p: {
    textAlign: 'justify'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={6} className={classes.image} m={20} />
        <Grid item sm={6}>
          <div className={classes.paper}>
            <h1>ABOUT US</h1>
            <h2>Welcome to Book My Doctor!</h2>
            <form className={classes.form} noValidate>
              <Typography align="justify"> We are the Largest online Medical Care Provider in Delhi since 2006. We started running the first clinic at the center of Delhi in 2006 and we open the new clinic almost every year. Now, 76 doctors and 100 co-medicals work together and always support about 4 thousand elderly, patients at their terminal stage or patients with special medical needs,the best thing about this app is the ease at which user can access it,not only this we have also added list of doctors who are willing to provide their services free of cost to bpl card holders.</Typography>
              <br />
              <Typography align="justify">All of our clinics are specialized in Medical Care and certified by the government. That means we have enough power to support patients and satisfactory track records of emergency visits.</Typography>
            </form>
          </div>
        </Grid>
      </Grid>
      <Copyright />
    </Box>
  );
}
