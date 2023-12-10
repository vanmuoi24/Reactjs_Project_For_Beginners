import axiosInstance from "./axio";

const fetchAllproducts = () => {
  return axiosInstance.get("/products");
};
const fetchProductById = (productId) => {
  return axiosInstance.get(`/products/${productId}`);
};

export { fetchAllproducts, fetchProductById };
