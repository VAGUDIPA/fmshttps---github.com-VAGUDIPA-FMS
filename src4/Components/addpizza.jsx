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
import axios from "axios";


class AddPizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: {
       // id: 0,
        pizzaImage:"",
        pizzaType: "",
        pizzaName: "",
        pizzaSize: "",
        pizzaPrice: "",
      },
    };
  }
  handleChange = (event) => {
    console.log("handleChange");
    const pizza = { ...this.state.pizza };
    console.log(pizza);
    pizza[event.target.name] = event.target.value;
    this.setState({ Pizza: pizza });
    this.setState({ pizza });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/pizza/v1/pizza", this.state.pizza)
      .then((res) => this.props.history.push("/pizza"));
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
              <Typography variant="h6">Add Pizza</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
            <TextField
               // id="outlined-basic"
                label="PizzaImage"
                placeholder="Enter pizza image location"
                name="pizzaImage"
                value={this.state.pizza.pizzaImage}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
               // id="outlined-basic"
                label="PizzaType"
                placeholder="Enter pizza type"
                name="pizzaType"
                value={this.state.pizza.pizzaType}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
               // id="outlined-name"
                label="PizzaName"
                placeholder="Enter pizza name"
                name="pizzaName"
                value={this.state.pizza.pizzaName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
              //  id="outlined-size"
                label="PizzaSize"
                placeholder="Enter pizza size"
                name="pizzaSize"
                value={this.state.pizza.pizzaSize}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
               <TextField
              //  id="outlined-price"
                label="PizzaPrice"
                placeholder="Enter pizza price"
                name="pizzaPrice"
                value={this.state.pizza.pizzaPrice}
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
                  to="/pizzas"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Add
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

export default AddPizza;