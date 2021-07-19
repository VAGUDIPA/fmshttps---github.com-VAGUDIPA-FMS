import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInHOC(props) {
  const classes = useStyles();

  //signup link path according to doctor or user
  const path =
    props.formName === "usersignin" ? "/user/signup" : "/fordoctors/signup";

  const baseUrl =
    props.formName === "usersignin"
      ? "http://localhost:8050/bmd/patient/"
      : "http://localhost:8050/bmd/doctor/";

  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const url = baseUrl + credentials.email + "/" + credentials.password;
    axios
      .get(url)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) dispatch(props.toggleLoginStatus());
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        className={classes.paper}
        style={{ marginBottom: "25px", marginTop: "80px" }}
      >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} validate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="emailorphone"
            label="Email/Phone"
            name="emailorphone"
            autoComplete="email"
            autoFocus
            onChange={(e) => onInputChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => onInputChange(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link style={{ cursor: "pointer" }} to="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            {"Don't have an account? "}
            <Link style={{ cursor: "pointer" }} to={path} variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
