const initialState = {
    markedArray: new Array(100).fill(5),
  };
  
  const MarkedArray = (state = initialState, action) => {
    switch (action.type) {
      case 'MARK_ANSWER':
        const data = action.payload;
        return {
          ...state,
          markedArray: data,
        };
  
      default:
        return state;
    }
  };
  
  export default MarkedArray;