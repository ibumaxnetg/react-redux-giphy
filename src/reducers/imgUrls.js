const initialState = [1, 2, 3, 4, 5];

export const imgUrls = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return "data";

    default:
      return state;
  }
};
