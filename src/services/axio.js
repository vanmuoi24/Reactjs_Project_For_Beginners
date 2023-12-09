import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};

    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    }

    return res;
  }
);

export default instance;
