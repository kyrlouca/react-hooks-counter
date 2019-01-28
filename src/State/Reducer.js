let initialState = {
  count: 0,  
};

function reducer(state, action) {
  const aType = action.type;
  switch (aType) {
    case 'reset':
      return initialState;
    case 'increment':
      return { ...state, count: state.count + 1};
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:      
      return state;
  }
}
export default reducer;
