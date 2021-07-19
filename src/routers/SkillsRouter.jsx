import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import AddSkills from "../components/skillscomponent/AddSkills";
import UpdateSkills from "../components/skillscomponent/UpdateSkills";
import SkillsList from "../components/skillscomponent/SkillsList";

function SkillsRouter(){
    return(
        <div>
          <Container>
    <Switch>
  <Route path="/skillslist" component={SkillsList} />
  <Route path="/addskills" component={AddSkills} />
  <Route path="/updateskills/:id" component={UpdateSkills} />
</Switch>
</Container>
</div>
    );
}

export default SkillsRouter;