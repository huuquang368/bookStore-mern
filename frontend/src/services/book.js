import axios from "axios";
import { backendURL } from "../constants";

const getBookList = () => {
  axios
    .get(backendURL)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export { getBookList };
