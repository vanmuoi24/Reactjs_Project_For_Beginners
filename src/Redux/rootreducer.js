const initvalue = {
  productredux: [],
};

const rotreducer = (state = initvalue, action) => {
  switch (action.type) {
    case "addcart":
      return {
        ...state,
        productredux: [...state.productredux, action.payload],
      };
    default:
      return state;
  }
};

export default rotreducer;
