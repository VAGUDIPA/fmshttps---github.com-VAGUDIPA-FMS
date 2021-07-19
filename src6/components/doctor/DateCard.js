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
import Doctor from '../src/img/docimg.jpg';
import { Container } from '@material-ui/core';
//import DatePicker from '@material-ui/lab/DatePicker';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
const useStyles = makeStyles((theme) => ({
    root: {
        width : 800,
      padding: theme.spacing(1),
    },
    media: {
      height: 140,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    submit: {
      alignItems: 'right',
      margin: theme.spacing(0.5, 0, 1),
    },
  }));

  const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    
  };

  export default function DateCard() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
  
    return (
      <>
      <Grid
      container
      direction="column"
    justify="flex-start"
    alignItems="flex-start"
    >
         <Box m={0.5} pt={0} borderColor="secondary.main" {...defaultProps}>
         <Card className={classes.root} border={1}>
      <CardActionArea>
        <CardContent>
            <Grid container
  direction="row"
  justify="left"
  alignItems="center">
        <Avatar className={classes.avatar}>
        R
          </Avatar>
          <Typography  variant="h6" component="h2" align="left" color="primary">
           Dr. Rajeshwari K.A Bhat
          </Typography>
          </Grid>
          <Typography variant="subtitle" component="p" align="left" color="textSecondary">
              <ul type="none">
                  <li>DNB, MD, MBBS</li>
                  <li>Dermatologist</li>
                  <li>Kaggadasapura-Tvacha Skin & Cosmetology Clinic</li>
                  <li>Consultation Fee: ₹400</li>
              </ul>
          </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Box m={0.5} pt={0} borderColor="secondary.main" {...defaultProps}>
    <Card className={classes.root} border={1}>
      <CardActionArea>
        <CardContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
         </MuiPickersUtilsProvider>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </Grid>
      </>
      );
    }
