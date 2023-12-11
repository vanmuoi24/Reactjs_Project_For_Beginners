const initvalue = {
  productredux: [],
  user: {
    email: "",
    firstname: "",
    password: "",
    status: false,
  },
};
const rotreducer = (state = initvalue, action) => {
  console.log(action);
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

    case "userRegister":
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    case "logout":
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    case "login":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "clear_cart":
      return {
        ...state,
        productredux: [],
      };
    default:
      return state;
  }
};

export default rotreducer;
