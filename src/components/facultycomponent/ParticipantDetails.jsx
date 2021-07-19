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
  TextField,
  Box,
} from "@material-ui/core";
import ParticipantService from "../../services/ParticipantService";

class ParticipantDetails extends Component {
  state = {
   participants: [],
    search: "",
  };
  componentDidMount() {
    ParticipantService.getAllParticipants()
    .then((res) => {
        this.setState({participants: res.data});
    });
}

//   onDelete = (participantId) => {
//     console.log(participantId);
//     ParticipantService.deleteParticipant(participantId).then((res) => {
//         this.setState({participants: this.state.participants.filter( participant => participant.participantId !== participantId)});
//     });
// }
  handleSearch = (event) => {
    console.log("handleSearch");
    const participants = [...this.state.participants];
    this.setState({ search: event.target.value });
    const filteredParticipants = participants.filter((participant) =>
      participant.participantName.includes(this.state.search)
    );
    this.setState({participants: filteredParticipants });
  };
  render() {
    return (
      <Container>
          <style>{'body { background: linear-gradient(#FF66FF,#339966,#FFCC66); }'}</style>
        <TableContainer
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
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
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/addparticipant"}
            >
              Add
            </Button> */}
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Participant Id</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Phone No</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.participants.map((participant) => (
                <TableRow key={participant.participantId}>
                  <TableCell>{participant.participantId}</TableCell>
                  <TableCell>{participant.participantName}</TableCell>
                  <TableCell>{participant.email}</TableCell>
                  <TableCell>{participant.mobile}</TableCell>
                  <TableCell>
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

export default ParticipantDetails;