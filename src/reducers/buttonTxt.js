const initialState = "Find Your GIFs";

export const buttonTxt = (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return "Wait...";

    case "RECEIVE_DATA":
      return initialState;

    default:
      return state;
  }
};
