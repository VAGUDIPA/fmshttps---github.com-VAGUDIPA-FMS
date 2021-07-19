import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseSlider from "../components/courseSlider";
import { Container } from "@material-ui/core";

class Home extends Component {
    render() { 
        return ( 
          
 <div>
     <style>{'body { background: linear-gradient(#33ccff,#ff00ff); }'}</style>
  <Container className="mt-10 w-50">
  <div disply="flex" marginTop="500">
  < CourseSlider />
  
  </div> 
  </Container>
</div>
         );
    }
}
 
export default Home;