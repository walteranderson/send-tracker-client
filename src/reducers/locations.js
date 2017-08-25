// availableLocations
// selectedLocation
// search
// - query
// - isSearching?
const initialState = {
  all: [
    { label: 'ABP', id: 1 },
    { label: 'Crux', id: 2 }
  ]
};

export default (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    default:
      return state;
  }
};
