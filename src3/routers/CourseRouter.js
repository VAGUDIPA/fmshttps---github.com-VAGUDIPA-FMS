import CourseList from "../components/coursecomponent/CourseList";
import { Route, Switch } from "react-router-dom";
import AddCourse from "../components/coursecomponent/AddCourse";
import UpdateCourse from "../components/coursecomponent/UpdateCourse";
import { BrowserRouter } from "react-router-dom";
import Nav from "../components/coursecomponent/Nav";
import Home from "../components/coursecomponent/Home";
import Courses from "../components/coursecomponent/Courses";
import ViewCourse from "../components/coursecomponent/ViewCourse";
import About from "../components/coursecomponent/About";
import Contact  from "../components/coursecomponent/Contact";

function CourseRouter(){ 
     return(
        <div>
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route path="/courselist" component={CourseList} />
            <Route path="/addcourse" component={AddCourse} />
            <Route path="/updatecourse/:id" component={UpdateCourse} />
            <Route path="/Home" component={Home} />
            <Route path="/Courses" component={Courses} />
            <Route path="/ViewCourse/:id" component={ViewCourse} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </BrowserRouter>
        </div>
     );
}

export default CourseRouter;