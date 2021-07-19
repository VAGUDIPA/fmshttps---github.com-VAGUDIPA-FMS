import axios from "axios";

const SKILLS_URL = "http://localhost:8081/fms/v1";

class SkillsService {
   getAllskills() {
    return axios.get(SKILLS_URL+'/skillslist');
  }

   getSkillsById(skillsId) {
    return  axios.get(SKILLS_URL+'/skillbyid/'+skillsId);
  }

   addSkills(skills) {
    return  axios.post(SKILLS_URL+'/addskills', skills);
   }
    updateSkills(skills,skillsId) {
      return axios.put(SKILLS_URL+'/updateskills/'+skillsId,skills);
  }
  
   deleteSkills(skillsId) {
    return  axios.delete(SKILLS_URL+'/deleteskills/'+skillsId);
  }
}

export default new SkillsService();