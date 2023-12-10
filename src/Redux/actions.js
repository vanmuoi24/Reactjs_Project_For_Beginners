export const addcart = (data) => {
  return {
    type: "addcart",
    payload: data,
  };
};

export const deletecart = (item) => {
  return {
    type: "delete_item",
    payload: item,
  };
};

export const Singin = (value) => {
  return {
    type: "userRigister",
    payload: value,
  };
};
