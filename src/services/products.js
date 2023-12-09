import axiosInstance from "./axio";

const fetchAllproducts = () => {
  return axiosInstance.get("/products");
};

export { fetchAllproducts };
