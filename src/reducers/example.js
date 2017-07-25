// reducer example


const initialState = {
  todos: [
    { label: 'do the laundry', completed: false },
    { label: 'go climbing', completed: false },
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

