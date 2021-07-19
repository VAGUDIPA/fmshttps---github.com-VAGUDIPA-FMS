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
  TextField,
  Button,
} from "@material-ui/core";
import { getParticipantAction } from "../actions/participantAction";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import red from "@material-ui/core/colors/red";

class Participant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnred: red[400],
    };
  }
  componentDidMount() {
    this.props.getParticipantAction(this.props.match.params.id);
  }

  handleSearch = (event) => {
    console.log("handleSearch");
    const participant = [...this.state.participant];
    this.setState({ search: event.target.value });
    const filteredParticipant = participant.filter((participant) =>
      participant.participantName.includes(this.state.search)
    );
    this.setState({ participant: filteredParticipant });
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
              label="Search By participantName"
              type="search"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/participant/addparticipant"}
            >
              Add
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ParticipantId</TableCell>
                <TableCell>ParticipantName</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.participant.map((participant) => (
                <TableRow key={participant.id}>
                  <TableCell>{participant.participantId}</TableCell>
                  <TableCell>{participant.participantName}</TableCell>
                  <TableCell>{participant.address}</TableCell>
                  <TableCell>{participant.mobile}</TableCell>
                  <TableCell>{participant.email}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link}
                      to={`/participant/updateparticipant/${participant.participantId}`}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => this.onDelete(participant.participantId)}
                    >
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

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    participant: state.stores.participant,
  };
};

//function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getParticipantAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Participant);
