const initialState = {
  additionalDetails: [],
};

const AdditionalDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DETAILS':
      const data = action.payload;

      return {
        ...state,

        additionalDetails: data,
      };
    case 'LOGOUT':
      return {
        ...state,

        additionalDetails: [],
      };

    default:
      return state;
  }
};

export default AdditionalDetails;
