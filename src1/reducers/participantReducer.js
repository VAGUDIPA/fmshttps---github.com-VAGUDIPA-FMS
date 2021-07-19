const participantState = {
    participants: [], 
    participant: {},
  };
  
  const participantReducer = (state = participantState, action) => {
    switch (action.type) {
      case "GET_PARTICIPANTS":
        return { ...state, participant: [...action.payload] };
    //   case "GET_PARTICIPANT":
    //     return { ...state, participant: action.payload };
    //   case "ADD_PARTICIPANT": return {...state, participants: [...participants, action.payload]} ;
    //   case "DELETE_PARTICIPANT": 
    //     const products = state.participants.filter(p=>p.id!==action.payload.id);
    //     return {...state, participants:participants}
    //   case "UPDATE_PARTICIPANT": 
    //     return state.participants.map(p=>p.id===action.payload.id?action.payload:p);
    //   default:
    //     return state;
    }
  };
  
  export default participantReducer;