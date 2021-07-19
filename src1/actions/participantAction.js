import axios from "axios";

export const getParticipantAction = () => async (dispatch) => {
  const result = await axios.get("http://localhost:8081/fms/v1/participantlist");
  console.log(result.data);
  dispatch({
    type: "GET_PARTICIPANTS",
    payload: result.data,
  });
};

// export const getParticipantsAction = (id) => async (dispatch) => {
//   const result = await axios.get("https://fakestoreapi.com/products/" + id);
//   console.log(result);
//   console.log(result.data);
//   dispatch({
//     type: "GET_PARTICIPANTS",
//     payload: result.data,
//   });
// };

// export const addParticipantAction = (product) => async (dispatch) => {
//   const result = await axios.post("https://fakestoreapi.com/products", product);
//   console.log(result);
//   console.log(result.data);
//   dispatch({
//     type: "ADD_PARTICIPANT",
//     payload: result.data,
//   });
// };

// export const deleteParticipantAction = (id) => async (dispatch) => {
//   const result = await axios.delete(`https://fakestoreapi.com/products/${id}`);
//   console.log(result);
//   console.log(result.data);
//   dispatch({
//     type: "DELETE_PARTICIPANT",
//     payload: result.data,
//   });
// };

// export const updateParticipantAction = (product) => async (dispatch) => {
//   const result = await axios.put("https://fakestoreapi.com/products", product);
//   console.log(result);
//   console.log(result.data);
//   dispatch({
//     type: "UPDATE_PARTICIPANT",
//     payload: result.data,
//   });
// };