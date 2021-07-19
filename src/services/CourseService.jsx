import axios from "axios";

const COURSE_BASE_URL = "http://localhost:8081/fms/v1";

class CourseService {
  async getAllCourses() {
    return await axios.get(`${COURSE_BASE_URL}/courselist`);
  }

  async getCourseById(id) {
    //"http://localhost:8081/fms/v1/coursebyid/20"
    return await axios.get(`${COURSE_BASE_URL}/coursebyid/${id}`);
  }

  async addCourse(course) {
    return await axios.post(`${COURSE_BASE_URL}/addcourse`, course);
  }

 async updateCourse(course, courseId){
    return axios.put(COURSE_BASE_URL+'/updatecourse/'+courseId,course);
}

  async deleteCourse(id) {
    return await axios.delete(`${COURSE_BASE_URL}/deletecourse/${id}`);
  }

}

export default new CourseService();