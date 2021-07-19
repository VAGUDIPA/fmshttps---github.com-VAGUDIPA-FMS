import React, { Component } from "react";
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
  TextField,
  Box,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import SkillsService from "../../services/SkillsService";

class SkillsList extends Component {
  state = {
    skills: [],
    search: "",
  };
  componentDidMount() {
    SkillsService.getAllskills()
    .then((res) => {
        this.setState({skills: res.data});
    });
}
 
  onDelete = (skillId) => {
    console.log(skillId);
    SkillsService.deleteSkills(skillId).then((res) => {
        this.setState({skills: this.state.skills.filter( skill => skill.skillId !== skillId)});
    });
}
  handleSearch = (event) => {
    console.log("handleSearch");
    const skills = [...this.state.skills];
    this.setState({ search: event.target.value });
    const filteredSkills = skills.filter((skill) =>
      skill.skillName.includes(this.state.search)
    );
    this.setState({ skills: filteredSkills });
    this.setState(skills);
  };
  render() {
    return (
      <Container>
        <TableContainer
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Box style={{ display: "flex", justifyContent: "flex-end" ,marginBottom:'20px'}}>
            <TextField
              id="search"
              variant="filled"
              label="Search By Name"
              type="search"
              value={this.state.search}
              onChange={this.handleSearch}
            />
            {/* <Button
              variant="contained"
              style={{ marginLeft: "10px",backgroundColor:'lightblue' }}
              component={Link}
              to={"/addskills"}
            >
              <b>Add</b>
            </Button> */}
          </Box>
          <Table>
          <style>{'body { background: linear-gradient(lightblue,black); }'}</style>
            <TableHead> 
              <TableRow>
                <TableCell><b>SkillId</b></TableCell>
                <TableCell><b>SkillName</b></TableCell>
                <TableCell><b>SkillDescription</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.skills.map((skill) => (
                <TableRow key={skill.skillId}>
                  <TableCell>{skill.skillId}</TableCell>
                  <TableCell>{skill.skillName}</TableCell>
                  <TableCell>{skill.skillDescription}</TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/updateskills/${skill.skillId}`}>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(skill.skillId)}>
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

export default SkillsList;