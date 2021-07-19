import React, { Component } from "react";
import CourseService from "../../services/CourseService";
import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

class ViewCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
      course: {},
    };
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    CourseService.getCourseById(this.state.id).then((res) =>
      this.setState({ course: res.data })
    );
  }

  render() {
    return (
      <div style={{marginTop:"100px"}}>
          <style>{'body { background: linear-gradient(#FFCCFF,#9966FF,#ffe47a); }'}</style>
        <div className="card col-md-6 offset-md-3" >
          <h1 className="text-center"> Course Details</h1>
           <div className="card-body">
            <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Course"
                        height="300"
                        image={`../images/${this.state.course.courseImage}`}
                      />
                      <CardContent>
                        <Typography align="left" variant="body2">
                         COURSE NAME: {this.state.course.courseName}
                        </Typography>
                        <Typography align="left" variant="body2">
                          COURSE INFO: {this.state.course.courseDescription}
                        </Typography>
                        <Typography align="left" variant="body2">
                          <h6>DURATION: {this.state.course.duration}</h6>
                        </Typography>
                        <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/addparticipantfeedback"}
            >
             Feedback
            </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
           </div>
         </div>
      </div>
    );
  }
}

export default ViewCourse;