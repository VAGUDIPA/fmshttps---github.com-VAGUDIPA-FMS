import Nav from "../components/Nav";
// import PageNotFound from "../components/PageNotFound";
import { Route, Switch } from 'react-router-dom';
import FeedbackList from "../components/participantfeedback/FeedbackList";
import AddFeedback from "../components/participantfeedback/AddFeedback";
import { Container } from "@material-ui/core";

function FacultyRouter(){
    return(
<div>  
   <Container>
      <Nav />
       <Switch>
        <Route  path="/participantfeedbacklist" component={FeedbackList} exact/>
        <Route exact path="/addparticipantfeedback" component={AddFeedback} />
        {/* <Route  component={PageNotFound} /> */}
       </Switch>
    </Container>
</div>
    );
}

export default FacultyRouter;