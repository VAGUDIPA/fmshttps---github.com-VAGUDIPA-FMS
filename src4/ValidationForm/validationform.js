//import React from "react";
import { Component } from "react";
import { TextField } from "@material-ui/core";
const initialState = {
    pizzaName: "",
    pizzaNameError: "",
}
//import AddPizza from "./addpizza";

export default class ValidationFrom extends Component {
    state = initialState;

    handleChange = (event) => {
        console.log("handleChange");
        const pizza = { ...this.state.pizza };
        pizza[event.target.name] = event.target.value;
        this.setState({ pizza: pizza });
      };

      validate = () => {
      let pizzaNameError= "";
      if (!this.state.pizzaName.includes('Pizza')) {
          pizzaNameError = 'invalid pizzaname'
      }

      if (pizzaNameError) {
          this.setState({pizzaNameError});
          return false;
      }

      return true;
      };

      handleSubmit = event => {
          event.preventDefault();
          const isValid = this.validate();
          if (isValid) {
              console.log(this.state);
              this.setState(initialState);
          }
      };


      render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            <TextField
            // id="outlined-basic"
             label="PizzaType"
             placeholder="Enter type of pizza"
             name="pizzaType"
             value={this.state.pizza.pizzaType}
             onChange={this.handleChange}
             fullWidth
             style={{ marginBottom: 10 }}
           />
            <div style={{ fontSize:12, color: "red"}}>
               {this.state.pizzaNameError}
               </div>
            </form>
        );
}
}