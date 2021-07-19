import "./App.css";
import Header from "./components/Header";
import HeaderTemp from "./components/header-temp";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions/Actions";
import { changeLoginStatus } from "./reducers/changeLoginStatus";
import { EditProfile } from "./components/patient/EditProfile";
import DoctorSignIn from "./components/doctor/DoctorSignIn";
import DoctorSignUp from "./components/doctor/DoctorSignUp";
import { Header as DoctorHeader } from "./components/doctor/Header";
import { Home as DoctorHome } from "./components/doctor/Home";

function App() {
  // const state = useSelector((state) => state.changeLoginStatus);
  // const dispatch = useDispatch();

  return (
    <Router>
      <Header />
      <div style={{ marginTop: "65px" }}></div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/fordoctors">
          <DoctorHeader />
          <Switch>
            <Route exact path="/fordoctors">
              <DoctorHome style={{ marginTop: "65px" }} />
            </Route>
            <Route exact path="/fordoctors/signup">
              <DoctorSignUp />
            </Route>
            <Route exact path="/fordoctors/login">
              <DoctorSignIn />
            </Route>
          </Switch>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user/profile">
          <EditProfile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
