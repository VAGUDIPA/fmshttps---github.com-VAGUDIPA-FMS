import course from "../components/coursecomponent/CourseList";
import { Route, Switch } from "react-router-dom";
import AddCourse from "../components/coursecomponent/AddCourse";
import UpdateCourse from "../components/coursecomponent/UpdateCourse";
import Nav from "../components/Nav";
import Courses from "../components/coursecomponent/Courses";
import ViewCourse from "../components/coursecomponent/ViewCourse";

function CourseRouter(){ 
     return(
        <div>
     
        <Nav />
          <Switch>
            <Route path="/course" component={course}  exact/>
            <Route path="/addcourse" component={AddCourse}  exact />
            <Route  path="/updatecourse/:id" component={UpdateCourse} exact/>
            <Route path="/courses" component={Courses} />
            <Route path="/viewcourse/:id" component={ViewCourse} />
        </Switch>
        </div>
     );
}

export default CourseRouter;