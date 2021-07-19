import axios from "axios";

const PARTICIPANT_BASE_URL = "http://localhost:8081/fms/v1";

class ParticipantService {
    async getAllParticipants() {
        return await axios.get(PARTICIPANT_BASE_URL+"/participantlist");
      }
    
      async getParticipantById(id) {
        return await axios.get(`${PARTICIPANT_BASE_URL}/participantbyid/+${id}`);
      }
    
      async addParticipant(participant) {
        return await axios.post(`${PARTICIPANT_BASE_URL}/addparticipant`, participant);
      }
      async updateParticipant(participant, participantId){
        return axios.put(PARTICIPANT_BASE_URL+'/updateparticipant/'+participantId,participant);
    }
      async deleteParticipant(id) {
        return await axios.delete(`${PARTICIPANT_BASE_URL}/deleteparticipant/${id}`);
      }
    }
    
    export default new ParticipantService();