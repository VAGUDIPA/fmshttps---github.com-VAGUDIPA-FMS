import { Container } from "@material-ui/core";
import Nav from "../components/Nav";
import { Route, Switch, } from "react-router-dom";
import AddParticipant from "../components/participantcomponent/AddParticipant"
import UpdateParticipant from "../components/participantcomponent/UpdateParticipant";
import ParticipantList from "../components/participantcomponent/ParticipantList";
import About from "../components/About";
import ContactUs from "../components/ContactUs"

function participantRouter() {
  return ( 
    <div >
      <Container>
        <Nav />
        <Switch>        
          <Route path="/updateparticipant/:id" component={UpdateParticipant}  exact/>
          <Route exact path="/addparticipant" component={AddParticipant} />
          <Route exact path="/participantlist" component={ParticipantList} />
          <Route exact path="/about" component ={About}/>
          <Route exact path="/contactus" component={ContactUs}/>
           {/* <Redirect exact from="/" to="/home" /> 
           <Route exact component={PageNotFound} />  */}
        </Switch>
      </Container>    
    </div>
  );
}

export default participantRouter;