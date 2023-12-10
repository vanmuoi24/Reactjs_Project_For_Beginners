const initvalue = {
  productredux: [],
  user: [
    {
      firtname: "",
      lastname: "",
      email: "",
      password: "",
    },
  ],
};
const rotreducer = (state = initvalue, action) => {
  switch (action.type) {
    case "addcart":
      return {
        ...state,
        productredux: [...state.productredux, action.payload],
      };

    case "delete_item":
      const updatedProducts = state.productredux.filter(
        (item) => item.id !== parseInt(action.payload)
      );

      return {
        ...state,
        productredux: updatedProducts,
      };

    case "userRigister":

    default:
      return state;
  }
};

export default rotreducer;
