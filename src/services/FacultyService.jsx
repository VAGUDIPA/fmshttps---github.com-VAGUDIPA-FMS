import axios from "axios";
 
const BASE_URL = "http://localhost:8081/fms/v1";
 
class FacultyService {
  async getAllfaculties() {
    return axios.get(BASE_URL+'/facultylist');
  }
 
  async getFacultyById(facultyId) {
    return  axios.get(BASE_URL+'/facultybyid/'+facultyId);
  }
 
  async addFaculty(faculty) {
    return  axios.post(BASE_URL+'/addfaculty', faculty);
   }
  async  updateFaculty(faculty,facultyId) {
      return axios.put(BASE_URL+'/updatefaculty/'+facultyId,faculty);
  }
  
  async deleteFaculty(facultyId) {
    return  axios.delete(BASE_URL+'/deletefaculty/'+facultyId);
  }
}
 
export default new FacultyService();