import  { Component } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  IconButton,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import CourseService from "../../services/CourseService";

class CourseList extends Component {
  state = {
    courses: [],
    search: "",
  };

  componentDidMount() {
    CourseService.getAllCourses().then((res) => {
      this.setState({ courses: res.data });
    });
  }

  onDelete = (courseId) => {
    console.log(courseId);
    CourseService.deleteCourse(courseId).then((res) => {
      this.setState({
        courses: this.state.courses.filter(
          (course) => course.courseId !== courseId
        ),
      });
    });
  };

 
  handleSearch = (event) => {
    console.log("handleSearch");
    const courses = [...this.state.courses];
    this.setState({ search: event.target.value });
    const filteredCourses = courses.filter((course) =>
      course.courseName.includes(this.state.search)
    );
    this.setState({ courses: filteredCourses });
  };
  
  render() {
    return (
      <Container>
        <TableContainer
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <TextField
              id="search"
              variant="filled"
              label="Search By courseName"
              type="search"
              value={this.state.search}
              onChange={this.handleSearch}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/addcourse"}
            >
              Add
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>CourseId</TableCell>
                <TableCell>CourseName</TableCell>
                <TableCell>CourseDescription</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>CourseImage</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.courseId}</TableCell>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell>{course.courseDescription}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell>{course.courseImage}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link}
                      to={`/updatecourse/${course.courseId}`}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(course.courseId)}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}
export default CourseList;
