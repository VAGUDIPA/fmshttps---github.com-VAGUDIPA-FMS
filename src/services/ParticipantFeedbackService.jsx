import axios from "axios";

const PARTICIPANT_FEEDBACK_BASE_URL = "http://localhost:8081/fms/v1";

class ParticipantFeedbackService {
    async getAllParticipantFeedbacks() {
        return await axios.get(PARTICIPANT_FEEDBACK_BASE_URL +"/participantfeedbacklist");
      }
    
      async getParticipantFeedbackByNo(id) {
        return await axios.get(`${PARTICIPANT_FEEDBACK_BASE_URL }/participantfeedbackbyid/+${id}`);
      }
    
      async addParticipantFeedback(participantfeedback) {
        return await axios.post(`${PARTICIPANT_FEEDBACK_BASE_URL }/addparticipantfeedback`, participantfeedback);
      }

      async deleteParticipantFeedback(id) {
        return await axios.delete(`${PARTICIPANT_FEEDBACK_BASE_URL }/deleteparticipantfeedback/${id}`);
      }
    }
    
    export default new ParticipantFeedbackService();