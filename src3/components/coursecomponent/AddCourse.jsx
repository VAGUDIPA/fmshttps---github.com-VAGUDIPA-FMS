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
import CourseService from "../../services/CourseService";
import { Link } from "react-router-dom";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      
   course: {
        courseId: 0,
        courseName: "",
        courseDescription: "",
        duration: "",
        courseImage: "",
      },
     
    };
       
  }
  handleChange = (event) => {
    console.log("handle change");
    const course = { ...this.state.course };
    console.log(course);
    course[event.target.name] = event.target.value;
    this.setState({ course });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    CourseService.addCourse(this.state.course).then((res)=> {
      const course = {
        courseId: 0,
        courseName: "",
        courseDescription: "",
        duration: "",
        courseImage: "",
      }
      this.setState({
        course:course
      })
      alert('Added Successfully')
    })
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
                marginBottom: "10px",
                padding: "10px",
                textAlign: "left",
              }}
            >
              <Typography variant="h6">Add Course</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
              <TextField
                id="outlined-courseName"
                label="Course Name"
                placeholder="Enter Course Name"
                name="courseName"
                value={this.state.course.courseName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-courseDescription"
                label="Course Description"
                placeholder="Enter Course Description"
                name="courseDescription"
                value={this.state.course.courseDescription}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-duration"
                label="Duration"
                placeholder="No of Days"
                name="duration"
                value={this.state.course.duration}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-Image"
                label="Image"
                placeholder="Image"
                name="courseImage"
                value={this.state.course.courseImage}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/CourseList"
                >
                  Cancel
                </Button>

                <Button variant="contained" color="primary" type="submit">
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

export default AddCourse;
