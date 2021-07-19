import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppBar color="primary">
        <Toolbar>
          <Box mr={8}>
            <Typography variant="h6">FMS</Typography>
          </Box>
          <Button color="inherit" component={NavLink} to={"/Home"}>
            Home
          </Button>

          <Button color="inherit" component={NavLink} to={"/courselist"}>
            Course
          </Button>

          <Button color="inherit" component={NavLink} to={"/Courses"}>
            CourseList
          </Button>

          <Button color="inherit" component={NavLink} to={"/About"}>
            About Us
          </Button>

          <Button color="inherit" component={NavLink} to={"/Contact"}>
            Contact Us
          </Button>

        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;
