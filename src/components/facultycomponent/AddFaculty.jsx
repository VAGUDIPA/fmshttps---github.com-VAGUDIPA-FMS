import React, { Component } from 'react';
import {
    Typography,
    TextField,
    Grid,
    Paper,
    Button,
    Box,
  } from "@material-ui/core";
  
 
  import { Link } from "react-router-dom";
  import FacultyService from "../../services/FacultyService";
class AddFaculty extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            faculty:{
                facultyId: 0,
                facultyName:"",
                mobile:"",
                email:"",
               
            },
            
         };
    }


    validateFaculty = () => {
      const facData={...this.state.faculty}
      // const mobile={this.state.faculty.mobile}
      const errors = {};
     
      
      if (!facData.facultyName) {
        errors.facultyName = 'faculty name cannot be empty';
      } else if (facData.facultyName.length > 20) {
        errors.facultyName = 'Name cannot exceed 20 characters';
      }
    
      if (!facData.mobile) {
        errors.mobile = 'mobile number cannot be empty';}
       else if(!/^[0-9]{10}$/i.test(facData.mobile)) {
        errors.mobile='Mobile number Should be 10 Digits';
       }
         else if(facData.mobile===facData){
           errors.mobile='mobile number already exists';
    
       }
      
    
      if (!facData.email) {
        errors.email = 'email cannot be empty';
      } else if (!/^[A-Z0-9._%+-]+@[gmail,outlook,yahoo]+\.[A-Z]{2,4}$/i.test(facData.email)) {
        errors.email = 'Invalid Email Address(Accepts only gmail, yahoo and outlook domains)';
      }
      
    
      return Object.keys(errors).length === 0 ? null : errors;
    };
   
    
    handleChange = (event) => {
      console.log("handleChange");
      const  faculty = { ...this.state.faculty };
      console.log(faculty);
      faculty[event.target.name] = event.target.value;
      console.log("xyz");console.log(event.target.value);
      this.setState({ faculty : faculty });
    };
  //   componentDidMount() {
  //     document.body.style.background = "-webkit-linear-gradient(#333300,#66ccff)"
  // }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      console.log("handleFormSubmit");
      console.log(event.target.value);
      const errors=this.validateFaculty();
      this.setState({ errors: errors || {} });
      if(errors)
      return
      FacultyService.addFaculty(this.state.faculty).then((res) =>{
        const faculty = {

          facultyId: 0,
    
          facultyName: "",
    
          mobile: "",
    
          email: "",
    
        }
    
        this.setState({
    
          faculty:faculty
    
        })
        alert("Registered Successfully");
        console.log( this.props.history.push(`/addskills`));
    }
  )
    };
    render() { 
        return ( 
             <div >
                <style>{'body { background: linear-gradient(#928DAB,#333300,#ffe47a); }'}</style>
            <Grid
            item
            md={5}
              style={{
              marginTop: "100px",
              marginLeft: "auto",
                marginRight: "auto",
               
               
              }}
            >
              <Paper elevation={3} style={{ padding: "30px", marginTop: "10px",  }} >
              <Box 
                  style={{
                     
                      padding:"5px",
                      textAlign:"center",
                      marginTop: "10px",
                      marginBottom:"30px",
                      background : "-webkit-linear-gradient(pink,grey)",
                  }} 
                  >
                     <Typography variant="h5" style={{ marginTop: "10px" }}>
                 <b>Faculty Registeration</b>
              </Typography>
              </Box>
                <form  onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="FacultyName"
                    placeholder="Enter Faculty Name"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#ff1493' },
                    }}
                    name="facultyName"
                    value={this.state.faculty.facultyName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: "20px" }}

                  />
                   {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.facultyName}
              </p>
            )} 
            

                  <TextField
                   id="outlined-number"
                   label="Mobile"
                  //  floatingLabelStyle={{color: "pink" }}
                   type="number"
                   InputLabelProps={{
                    style: { color: '#ff1493' },
                     shrink: true,
                   }}
                   placeholder="Enter your mobile number"
                   variant="outlined"
                   name="mobile"
                    value={this.state.faculty.mobile}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: "20px"  }}
                    
                    // errors={errors.mobile}
                    // helperText={errors.mobile ? errors.mobile.message :""}
                   
                  />
                  {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.mobile}
              </p>
            )}

                  <TextField
                    id="outlined-Email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#ff1493' },
                    }}
                    name="email"
                    value={this.state.faculty.email}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: "20px"  }}
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
                <Button variant="contained" color="secondary" type="submit">
                  Submit
                </Button>
                {/* <button onClick={() => alert('Added Successfully')}>
        Save
      </button > */}

              </div>
                </form>
              </Paper>
            </Grid>
          </div>
         );
    }
}
 
export default AddFaculty;