import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  let history = useHistory();
  const [doctor, setDoctor] = useState({
    doctorName: "",
    doctorPhone: "",
    chargePervisit: "",
    hospitalName: "",
    speciality: "",
    location: "",
    email: "",
    password: "",
  });
  //destruction for user
  const {
    doctorName,
    doctorPhone,
    chargePervisit,
    hospitalName,
    speciality,
    location,
    email,
    password,
  } = doctor;

  const onInputChange = (e) => {
    //we are using spread operator
    //using spread operator other fields will not show errors
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  //for form submition
  const onSubmit = async (e) => {
    e.preventDefault();
    //call post method
    // await axios.post("http://localhost:3003/doctors",doctor);
    // //redirect to home page after storing
    // history.push("/");
  };

  const classes = useStyles();

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginBottom: "25px", marginTop: "80px" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="doctorName"
                autoComplete="name"
                autoFocus
                value={doctorName}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Mobile Number"
                name="doctorPhone"
                autoComplete="phone"
                autoFocus
                value={doctorPhone}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="charge"
                label="Charge Per Visit"
                name="chargePervisit"
                autoComplete="charge"
                autoFocus
                value={chargePervisit}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="hospiital"
                label="Hospital Name"
                name="hospitalName"
                autoComplete="hospital"
                autoFocus
                value={hospitalName}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="speciality"
                label="Speciality"
                name="speciality"
                autoComplete="speciality"
                autoFocus
                value={speciality}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                autoFocus
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {"Already have an account? "}
              <Link style={{ cursor: "pointer" }} to="/signin" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
