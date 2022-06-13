// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (
  state = productInitalState,
  { type, payload }
) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
