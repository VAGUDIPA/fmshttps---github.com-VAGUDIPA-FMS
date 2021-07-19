// import logo from './logo.svg';
import "./App.css";
import  Container  from "@material-ui/core/Container";
import Pizza from "./Components/pizza";

import {Route, Switch, Redirect} from "react-router-dom";
import Nav from "./Components/nav";
import Home from "./Components/home";
import updatePizza from "./Components/updatepizza";
import AddPizza from "./Components/addpizza";
import PizzaList from "./Components/pizzalist";
import ValidationForm from "./ValidationForm/validationform";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      {/* <ValidationForm /> */}
       <Nav />
    <Container >
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/pizzas" component={Pizza}/>
        <Route path="/pizza/update/:id" component={updatePizza}/>
        <Route path="/pizza/add" component={AddPizza}/>
        <Route path="/pizzalist" component={PizzaList}/>
        <Redirect exact from="/" to="/home" />

      </Switch>
    </Container>
    </div>
  );
}

export default App;
