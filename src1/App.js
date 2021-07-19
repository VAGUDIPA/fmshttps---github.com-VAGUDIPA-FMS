import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "../src/components/coursecomponent/courseNav";
import { BrowserRouter } from "react-router-dom";
import participant from "./components/participant";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Container style={{ marginTop: "68px" }}>
        <Switch>
          <Route path="/participant" component={participant} />
        </Switch>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;