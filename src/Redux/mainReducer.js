import { INPUT_UPDATED } from "./actionConstants";

const INITIAL_STATE = {
  numberOfPassengers: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_UPDATED:
      return {
        ...state,
        numberOfPassengers: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
