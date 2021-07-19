  import Nav from "../components/Nav";
  // import PageNotFound from "../components/PageNotFound";
  import {  Route, Switch } from 'react-router-dom';
  import FacultyList from "../components/facultycomponent/FacultyList";
  import AddFaculty from "../components/facultycomponent/AddFaculty";
  import UpdateFaculty from "../components/facultycomponent/UpdateFaculty";
  import { Container } from "@material-ui/core";
import Home from "../components/Home";
import ParticipantDetails from "../components/facultycomponent/ParticipantDetails";
  
  function FacultyRouter(){
      return(
          <div>  
              <Container>
        <Nav />
      <Switch>
    <Route  path="/facultylist" component={FacultyList} exact/>
    <Route exact path="/addfaculty" component={AddFaculty} />
    <Route exact path="/participantdetails" component={ParticipantDetails} />
    <Route exact path="/updatefaculty/:id" component={UpdateFaculty} />
    <Route exact path="/" component ={Home} />
    {/* <Route  component={PageNotFound} /> */}
  </Switch>
  </Container>
  </div>
      );
  }
  
  export default FacultyRouter;