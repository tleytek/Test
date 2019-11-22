import axios from "axios";
import { FETCH_CRYPTO } from "./types";

export const fetchCrypto = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  dispatch({ type: FETCH_CRYPTO, payload: response.data });
};
