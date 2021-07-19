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
import SkillsService from "../../services/SkillsService";

class UpdateSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: {
        skillId: 0,
        skillName: "",
        skillDescription: "",
      },
    };
  }
  componentDidMount() {
    SkillsService.getSkillsById(this.props.match.params.id).then((res) =>
      this.setState({ skill: res.data })
    );
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
  handleFormSubmit = (e) => {
    e.preventDefault();
    const errors=this.validateSkills();
      this.setState({ errors: errors || {} });
      if(errors)
      return
        let skill  ={ id: this.state.skillId, skillName: this.state.skillName, 
            skillDescription: this.state.skillDescription
        };
        console.log(JSON.stringify(skill));
       SkillsService.updateSkills(this.state.skill,this.state.skill.skillId).then((res) =>{
            this.props.history.push('/skillslist');
    });
    alert("Updated  Successfully");
  };
  handleChange = (event) => {
    console.log("handleChange");
    const skill = { ...this.state.skill };
    skill[event.target.name] = event.target.value;
    this.setState({ skill : skill });
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
                textAlign: "left",
              }}
            >
              <Typography variant="h6">Update Skills</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
            <style>{'body { background: linear-gradient(lightblue,black); }'}</style>
            <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="SkillId"
                    name="skillId"
                    value={this.state.skill.skillId}
                    inputProps={{ readOnly: true }}
                    fullWidth
                    style={{ marginBottom: 30 }}
                   
                  />
        
                  <TextField
                    id="outlined-basic"
                    label="SkillName"
                    placeholder="Enter skill Name"
                    variant="outlined"
                    name="skillName"
                    value={this.state.skill.skillName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 30 }}
                  />
                  {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.skillName}
              </p>
            )}
        
                  <TextField
                    id="outlined-basic"
                    label="SkillDescription"
                    placeholder="Enter Skill Description"
                    variant="outlined"
                    name="skillDescription"
                    value={this.state.skill.skillDescription}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 30 }}
                  />
                  {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.skillDescription}
              </p>
            )}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/skillslist"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" type="submit" >
                  Save
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}
  export default UpdateSkills;