import React, { Component } from "react";
import {
  Paper,
  TableContainer,
  Container,
  IconButton,
  TextField,
  Box,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import FacultyService from "../../services/FacultyService";

class FacultyList extends Component {
  state = {
    faculties: [],
    search: "",
  };
  componentDidMount() {
    FacultyService.getAllfaculties()
    .then((res) => {
        this.setState({faculties: res.data});
    });
}
 
  onDelete = (facultyId) => {
    console.log(facultyId);
    FacultyService.deleteFaculty(facultyId).then((res) => {
        this.setState({faculties: this.state.faculties.filter( faculty => faculty.facultyId !== facultyId)});
    });
}
  handleSearch = (event) => {
    console.log("handleSearch");
    const faculties = [...this.state.faculties];
    this.setState({ search: event.target.value });
    const filteredFaculties = faculties.filter((faculty) =>
      //faculty.facultyName.includes(this.state.search),
      faculty.email.includes(this.state.search)
    );
    this.setState({ faculties: filteredFaculties });

  };
  render() {
    return (
      <Container>
        <TableContainer
        
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Box style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px" }}>
            <TextField
              id="search"
              variant="filled"
              label="Search By Name"
              type="search"
              value={this.state.search}
              style={{ marginRight: "30px",backgroundColor:'#ffe47a' }}
              onChange={this.handleSearch}
            />
            {/* <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/addfaculty"}
            >
              Add
            </Button> */}
          </Box>
          <div>
            <div className="row">
            <style>{'body { background: linear-gradient(#928DAB,#333300,#ffe47a); }'}</style>
           
          <table   style={{border: '4px', color:'black'}} className="table table-striped table-bordered" >
         
            <thead bgcolor="#ffe47a" >
              <tr >
                <td><b>FacultyId</b></td>
                <td><b>FacultyName</b></td>
                <td><b>Mobile</b></td>
                <td><b>Email</b></td>
                <td><b>Actions</b></td>
              </tr>
            </thead>
            <tbody back >
              {this.state.faculties.map((faculty) => (
                <tr key={faculty.facultyId}>
                  <td >{faculty.facultyId}</td>
                  <td>{faculty.facultyName}</td>
                  <td>{faculty.mobile}</td>
                  <td>{faculty.email}</td>
                  <td>
                    <IconButton component={Link} to={`/updatefaculty/${faculty.facultyId}`}>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(faculty.facultyId)}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </TableContainer>
      </Container>
    );
  }
}

export default FacultyList;