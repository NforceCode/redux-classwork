const initialState = {
  count: 0,
  step: 1
};

function reducer ( state = initialState, action) {
  switch(action.type) {
    case "INCREMENT" : {
      return {
        ...state,
        count: state.count + state.step
      }
    }
    case "DECREMENT" :{
      return {
        ...state,
        count: state.count - state.step
      }
    }
    case 'setStep': {
      return {
        ...state,
        step: action.newStep,
      }
    }
    default:{
      return state;
    }
  }
}

export default reducer;