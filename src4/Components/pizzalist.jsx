import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pizza from "./pizza";
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

//import Card from "react-bootstrap/Card";

class PizzaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8081/pizza/v1/pizza/all").then((res) => {
      this.setState({ pizzas: res.data });
    });
  }
  render() {
    console.log(this.state.pizzas);
    return (
      <Grid container spacing={1}>
        <Grid item md={9}>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "80px"}}>
            <Grid container spacing={5}>
              {this.state.pizzas.map((pizza) => (
                <Grid item md={4} key={pizza.pizzaId}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        // image={`../public/images/${pizza.pizzaImage}`}
                        image={`./images/${pizza.pizzaImage}`}
                      />
                      <CardContent>
                        <Typography align="left" variant="body2">
                          {pizza.pizzaName}
                        </Typography>
                        <Typography align="left" variant="body2">
                          {pizza.pizzaType}
                        </Typography>
                        <Typography variant="body2">
                          {pizza.pizzaDescription}
                        </Typography>
                        <Typography align="right">
                          ${pizza.pizzaPrice}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Button variant="contained" color="primary" type="submit">
                    Add To Cart
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="contained" color="primary" type="submit" >
                    Buy Now
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default PizzaList;
