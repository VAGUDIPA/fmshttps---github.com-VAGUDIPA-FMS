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
  Box,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import ParticipantFeedbackService from "../../services/ParticipantFeedbackService";

class ParticipantFeedbackList extends Component {
  state = {
   participantFeedbacks: [],
    search: "",
  };
  componentDidMount() {
    ParticipantFeedbackService.getAllParticipantFeedbacks()
    .then((res) => {
        this.setState({ participantFeedbacks: res.data});
    });
}

  onDelete = (feedbackNo) => {
    console.log(feedbackNo);
    ParticipantFeedbackService.deleteParticipantFeedback(feedbackNo).then((res) => {
        this.setState({participantFeedbacks: this.state.participantFeedbacks.filter( participantFeedback => participantFeedback.feedbackNo !== feedbackNo)});
    });
}
  handleSearch = (event) => {
    console.log("handleSearch");
    const participantFeedbacks = [...this.state.participantFeedbacks];
    this.setState({ search: event.target.value });
    const filteredParticipantfeedbacks = participantFeedbacks.filter((participantFeedback) =>
      participantFeedback.participant.participantName.includes(this.state.search)
    );
    this.setState({participantFeedback: filteredParticipantfeedbacks });
  };
  render() {
    return (
      <Container>
         <style>{'body { background: linear-gradient(#333300,#CC0099); }'}</style>
        <TableContainer
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <TextField
              id="search"
              variant="filled"
              label="Search By Name"
              type="search"
              value={this.state.search}
              onChange={this.handleSearch}
            /> */}
            {/* <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/addparticipantfeedback"}
            >
              Add
            </Button> */}
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Participant name</b></TableCell>
                <TableCell><b>Faculty name</b></TableCell>
                <TableCell><b>Course name</b></TableCell>
                <TableCell><b>Average Rating</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.participantFeedbacks.map((participantFeedback) => (
                <TableRow key={participantFeedback.feedbackNo}>
                    <TableCell>{participantFeedback.feedbackdate}</TableCell>
                  <TableCell>{participantFeedback.participant.participantName}</TableCell>
                  <TableCell>{participantFeedback.faculty.facultyName}</TableCell>
                  <TableCell>{participantFeedback.course.courseName}</TableCell>
                  <TableCell>{participantFeedback.averageRating}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => this.onDelete(participantFeedback.feedbackNo)}>
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

export default ParticipantFeedbackList;