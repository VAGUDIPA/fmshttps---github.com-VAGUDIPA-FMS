import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "@material-ui/core";
import CourseRouter from "./routers/CourseRouter";
import Footer from "./components/coursecomponent/footer";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <Container style={{ marginTop: "68px" }}>
          <CourseRouter />  
          </Container> 
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;