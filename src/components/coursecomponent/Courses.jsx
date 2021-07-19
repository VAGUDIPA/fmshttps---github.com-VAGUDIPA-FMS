import  { Component } from "react";
import CourseService from "../../services/CourseService";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Paper,
  Button,
} from "@material-ui/core";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
     this.viewCourse = this.viewCourse.bind(this);
  }

  componentDidMount() {
    CourseService.getAllCourses().then((res) => {
      this.setState({ courses: res.data });
    });
  }

  viewCourse(id) {
    this.props.history.push(`/viewcourse/${id}`);
    console.log( this.props.history.push(`/viewcourse/${id}`));
  }

  render() {
    console.log(this.state.courses);
    return (
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "80px" }}>
            <Grid container spacing={5}>
              {this.state.courses.map((course) => (
                <Grid item md={3} key={course.courseId}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Course"
                        height="140"
                        image={`./images/${course.courseImage}`}
                      />
                      <CardContent>
                        <Typography align="left" variant="body2">
                          {course.courseName}
                        </Typography>
                        <Typography align="left" variant="body2">
                          {course.courseDescription}
                        </Typography>
                        <Typography variant="body2">
                          <h6>Duration: {course.duration}</h6>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => this.viewCourse(course.courseId)}
                  >
                    View Course
                  </Button>
                  {/* &nbsp;&nbsp;&nbsp;
                  <Button variant="contained" color="primary" type="submit">
                    Buy Now
                  </Button> */}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Courses;