import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Radio, RadioGroup } from "@material-ui/core";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";
import axios from "axios";
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

export default function UserSignUp() {
  let history = useHistory();
  const [user, setDoctor] = useState({
    userName: "",
    userPhone: "",
    age: "",
    address: "",
    email: "",
    password: "",
    gender: "Male",
  });

  const { userName, userPhone, age, address, email, password, gender } = user;

  const onInputChange = (e) => {
    setDoctor({ ...user, [e.target.name]: e.target.value });
  };

  //for form submition
  const onSubmit = async (e) => {
    e.preventDefault();
    //call post method
    await axios
      .post("http://localhost:8050/patient/add", user)
      .then((response) => {
        if (response.status === 200)
          alert("Successflly Signed Up!!\nWelcome to BMD Community");
        //history.push("/");
      })
      .catch((err) => console.log(err));
    //redirect to home page after storing
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
        <form className={classes.form} onSubmit={onSubmit} validate>
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
                name="userName"
                autoComplete="name"
                autoFocus
                value={userName}
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
                id="userPphone"
                label="Contact"
                name="userPhone"
                autoComplete="phone"
                autoFocus
                value={userPhone}
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
                label="Email"
                name="email"
                type="email"
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
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                autoFocus
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                value={address}
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
                name="age"
                label="Age"
                type="number"
                id="age"
                value={age}
                min="1"
                max="100"
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
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
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            {"Already have an account? "}
            <Link
              style={{ cursor: "pointer" }}
              to="/user/login"
              variant="body2"
            >
              Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
