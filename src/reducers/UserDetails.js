const initialState = {
  userDetails: [],
};

const UserDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_DETAILS':
      const data = action.payload;
      return {
        ...state,
        userDetails: data,
      };
    case 'LOGOUT':
      return {
        ...state,
        userDetails: [],
      };

    default:
      return state;
  }
};

export default UserDetails;
