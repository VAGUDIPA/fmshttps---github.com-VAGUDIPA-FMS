import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FacultyService from "../../services/FacultyService";

class UpdateFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faculty: {
        facultyId: 0,
        facultyName: "",
        mobile: "",
        email: "",
      },
    };
  }
  componentDidMount() {
    FacultyService.getFacultyById(this.props.match.params.id).then((res) =>
      this.setState({ faculty: res.data })
    );
  }
  validateFaculty = () => {
    const facData={...this.state.faculty}
    const errors = {};
  
    if (!facData.facultyName) {
      errors.facultyName = 'faculty name cannot be empty';
    } else if (facData.facultyName.length > 20) {
      errors.facultyName = 'Name cannot exceed 20 characters';
    }
  
    if (!facData.mobile) {
      errors.mobile = 'mobile number cannot be empty';
    }else if(!/^[0-9]{10}$/i.test(facData.mobile)) {
      errors.mobile='Mobile number Should be 10 Digits';
    } 
  
    if (!facData.email) {
      errors.email = 'email cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[gmail,yahoo,outlook]+\.[A-Z]{2,4}$/i.test(facData.email)) {
      errors.email =
        "Invalid Email Address(Accepts only gmail, yahoo and outlook domains)";
    }
  
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const errors=this.validateFaculty();
      this.setState({ errors: errors || {} });
      if(errors)
      return
        let faculty  ={ id: this.state.facultyId, facultyName: this.state.facultyName, 
            mobile: this.state.mobile, email: this.state.email
        };
        console.log(JSON.stringify(faculty));
       FacultyService.updateFaculty(this.state.faculty,this.state.faculty.facultyId).then((res) =>{
            this.props.history.push('/facultylist');
    });
    alert("Updated  Successfully");
  };
  handleChange = (event) => {
    console.log("handleChange");
    const faculty = { ...this.state.faculty };
    faculty[event.target.name] = event.target.value;
    this.setState({ faculty : faculty });
  };

  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <Grid
          item
          md={5}
          style={{
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
            <Box
              style={{
                backgroundColor: "lightgray",
                marginBottom: "20px",
                padding: "5px",
                textAlign: "center",
                background : "-webkit-linear-gradient(pink,grey)",
              }}
            >
              <Typography variant="h6"><b>Update Faculty</b></Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
            <style>{'body { background: linear-gradient(#928DAB,#333300,#ffe47a); }'}</style>
            <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="FacultyId"
                    name="facultyId"
                    inputProps={{ readOnly: true }}
                    value={this.state.faculty.facultyId}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#ff1493' },
                    }}
                    style={{ marginBottom: 30 }}
                   
                  />
        
                  <TextField
                    id="outlined-basic"
                    label="FacultyName"
                    placeholder="Enter Faculty Name"
                    variant="outlined"
                    name="facultyName"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#ff1493' },
                    }}
                    value={this.state.faculty.facultyName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 30 }}
                  />
         {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.facultyName}
              </p>
            )}
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    placeholder="Enter your mobile number"
                    variant="outlined"
                    name="mobile"
                    value={this.state.faculty.mobile}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 30 }}
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#ff1493' },
                    }}
                  />
                  {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.mobile}
              </p>
            )}
                  
                   <TextField
                    id="outlined-basic"
                    label="Email"
                    placeholder="Enter your email"
                    variant="outlined"
                    name="email"
                    value={this.state.faculty.email}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 30 }}
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#ff1493' },
                    }}
                  />
                    {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.email}
              </p>
            )}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/facultylist"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" type="submit" >
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}
  export default UpdateFaculty;