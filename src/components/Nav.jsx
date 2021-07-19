import React from "react";
import {
  AppBar,
  Toolbar,
  Button,

} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {  Navbar,DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const nav = () => {
  return (
    <header>
    <AppBar style={{ backgroundColor: '#146EB4' }}>
      <Toolbar>
      <Navbar.Brand component={NavLink} to="/home">
      <img
        src="/images/FMSlogo.png"
        width="100"
        height="50"
        className="d-inline-block align-center"
        alt="Fms logo"
      />
    </Navbar.Brand>
        <Button color="inherit" component={NavLink} to="/">
        <HomeIcon fontSize="large" />
        </Button>
       
        <DropdownButton id="dropdown-basic-button"  title="Participant" variant="dark"  style={{marginRight:"10px"}}>
        
        <Button color="inherit" component={NavLink} to="/addparticipant">
         Participant Registration
        </Button>
        
        <Button color="inherit" component={NavLink} to="/participantlist">
         Edit Your Details
        </Button>
        
        <Button color="inherit" component={NavLink} to={"/Courses"}>
           Courses
          </Button>
          
          </DropdownButton>
         
          <DropdownButton id="dropdown-basic-button" variant="dark" title="Faculty"  >
          
          <Button color="inherit" component={NavLink} to="/addfaculty">
          Faculty Registration
        </Button>
        <Button color="inherit" component={NavLink} to={"/Course"}>
            Course list
          </Button>

          <Button color="inherit" component={NavLink} to="/addskills">
         Add Skills
        </Button>

        <Button color="inherit" component={NavLink} to="/skillslist">
         skills list
        </Button>

        <Button color="inherit" component={NavLink} to="/addcourse">
         Add Course
        </Button>
          
          <Button color="inherit" component={NavLink} to={"/facultylist"}>
            edit your details
          </Button>
         
          <Button color="inherit" component={NavLink} to="/participantdetails">
         ParticipantList
        </Button>
        
        <Button color="inherit" component={NavLink} to={"/participantfeedbacklist"}>
            Feedback
          </Button>
          </DropdownButton>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/contactus">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
    </header>
  );
};
export default nav;