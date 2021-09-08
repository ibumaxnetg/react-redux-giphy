const initialState = [1, 2, 3, 4, 5];

export const imgUrls = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload;

    default:
      return state;
  }
};
