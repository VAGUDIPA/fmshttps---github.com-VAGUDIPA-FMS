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
import CourseService from "../../services/CourseService";

class UpdateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        courseId: 0,
        courseName: "",
        courseDescription: "",
        duration: "",
        courseImage:""
      },
    };
  }

  componentDidMount() {
    CourseService.getCourseById(this.props.match.params.id).then((res) =>
      this.setState({ course: res.data })
    );
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    let course ={ id: this.state.courseId, courseName: this.state.courseName, courseDescription: this.state.courseDescription,
        duration: this.state.duration, courseImage:this.state.courseImage
    };
    console.log(JSON.stringify(course));
   CourseService.updateCourse(this.state.course,this.state.course.courseId).then((res) =>{
        this.props.history.push('/course');
   });
   alert("Updated Successfully")
  };

  handleChange = (event) => {
    console.log("handleChange");
    const course = { ...this.state.course };
    course[event.target.name] = event.target.value;
    this.setState({ course: course });
  };

  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <style>{'body { background: linear-gradient(#CCFF99,#CC99FF); }'}</style>
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
              <Typography variant="h6">Update Course</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
            <TextField
                id="outlined-courseId"
                label="Course Image"
                placeholder="Enter Course Image Name"
                name="courseImage"
                value={this.state.course.courseImage}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-courseName"
                label="Course Name"
                placeholder="Enter course name"
                name="courseName"
                value={this.state.course.courseName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-courseDescription"
                label="Course Description"
                placeholder="Enter course description"
                name="courseDescription"
                value={this.state.course.courseDescription}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-duration"
                label="Duration"
                placeholder="Enter no of Days"
                name="duration"
                value={this.state.course.duration}
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
                  to="/Course"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary"  type="submit">
                  update
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

export default UpdateCourse;