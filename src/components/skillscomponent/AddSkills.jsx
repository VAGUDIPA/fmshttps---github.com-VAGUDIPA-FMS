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
  import SkillsService from "../../services/SkillsService";
class AddSkills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skill:{
                skillId: 0,
                skillName:"",
                skillDescription:"",
            },
            errors:{

            }
         };
    }
    validateSkills = () => {
      const sklData={...this.state.skill}
      const errors = {};
    
      if (!sklData.skillName) {
        errors.skillName = 'skill name cannot be empty';
      } else if (sklData.skillName.length > 20) {
        errors.skillName = 'skill name cannot exceed 20 characters';
      }
      if (!sklData.skillDescription) {
        errors.skillDescription = 'skill description cannot be empty';
      } 
    
      return Object.keys(errors).length === 0 ? null : errors;
    };
    
    handleChange = (event) => {
      console.log("handleChange");
      const skill = { ...this.state.skill };
      console.log(skill);
      skill[event.target.name] = event.target.value;
      this.setState({ skill: skill });
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      const errors=this.validateSkills();
      this.setState({ errors: errors || {} });
      if(errors)
      return
      SkillsService.addSkills(this.state.skill).then((res) =>{
        const skill = {

          skillId: 0,
    
          skillName: "",
    
          skillDescription: "",
    
        }
    
        this.setState({
    
          skill:skill
    
        })
        alert("Added Successfully");
        console.log( this.props.history.push(`/addcourse`));
    }
  )
    };
    render() { 
        return ( 
            <div>
               <style>{'body { background: linear-gradient(lightblue,black); }'}</style>
            <Grid
            item
            md={5}
              style={{
              marginTop: "100px",
              marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
              <Box 
                  style={{
                      backgroundColor : "lightblue",
                      marginBottom:"20px",
                      padding:"5px",
                      textAlign:"center",
                      marginTop: "10px",
                  }} 
                  >
                     <Typography variant="h5" style={{ marginTop: "10px" }}>
               <b>Skills Registeration</b>
              </Typography>
              </Box>
                <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="SkillName"
                    placeholder="Enter Skill Name"
                    variant="outlined"
                    name="skillName"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: 'black' },
                    }}
                    value={this.state.skill.skillName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}

                  />
                  {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.skillName}
              </p>
            )}

                  <TextField
                   id="outlined-number"
                   label="SkillDescription"
                   placeholder="Enter SkillDescription"
                   variant="outlined"
                   name="skillDescription"
                   InputLabelProps={{
                    shrink: true,
                    style: { color: 'black' },
                  }}
                    value={this.state.skill.skillDescription}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                  {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.skillDescription}
              </p>
            )}


                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
               
                  style={{ marginRight: "10px", color:'black' }}
                  component={Link}
                  to="/home"
                >
                  <b>Cancel</b>
                </Button>
                <Button variant="contained" style={{backgroundColor:'lightblue'}} type="submit">
                 <b> Save</b>
                </Button>

              </div>
                </form>
              </Paper>
            </Grid>
          </div>
         );
    }
}
 
export default AddSkills;