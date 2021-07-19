import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { AppBar } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: theme.spacing(1),
  },
  media: {
    height: 140,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
  },
  submit: {
    alignItems: 'right',
    margin: theme.spacing(0.5, 0, 1),
  },
  
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <>
    <Grid 
    container
    direction="column"
  justify="flex-end"
  alignItems="flex-end">
    <Box border={1}  m={0.5} pt={0}>
    <Card className={classes.root} border={1}>
      <CardActionArea>
        <CardContent>
        <Typography  variant="body2" component="h2" color="textSecondary" align="left">
         Health Tips: Make These Tips a Regular Part of Your Lifestyle To Fight Covid 19<hr/>
      </Typography>
      
          <Typography  variant="subtitle"  component="p" align="left">
            <ul type="square">
              <li>Wear a mask</li>
              <li>Wash your hands regularly</li>
              <li>Maintain social distancing </li>
              <li>Eat a healthy balanced diet </li>
              <li>Be active</li>
          </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Box border={1} m={0.5}>
    <Card className={classes.root}>
  <CardActionArea>
    <CardContent>
    <Grid
  container
  direction="row"
  justify="left"
  alignItems="center"
>
          <EmailIcon />
          <Typography  variant="h6" component="h2" align="left">
           Ask a FREE Question
          </Typography><br/>
          <Typography  variant="subtitle"  component="p" align="left">
          Get FREE multiple opinions from Doctors
          </Typography>
          </Grid><br/>
          {/* <TextField
          id="msg"
         placeholder="Enter questions for you or someone else Eg. my left eye is red or swollen"
          multiline
          rows={5}
          variant="outlined"
        /> */}
        <TextareaAutosize aria-label="minimum height" rowsMin={6} cols={40}
        placeholder="Enter questions for you or someone else Eg. my left eye is red or swollen"/><br/>
          <Grid 
    container
    direction="column"
  justify="flex-end"
  alignItems="flex-end">
         <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            </Grid>
    </CardContent>
  </CardActionArea>
</Card>
</Box>
    </Grid>
</>
  );
}
