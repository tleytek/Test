import axios from "axios";
import { FETCH_CRYPTO } from "./types";
import https from "https";
var options = {
  method: "GET",
  hostname: "rest.coinapi.io",
  path: "/v1/exchanges",
  headers: { "X-CoinAPI-Key": "4d62e248-a061-4c5f-85a1-e475e9dc6b78" }
};
export const fetchCrypto = () => async dispatch => {
  const response = await axios.get("https://api.coincap.io/v2/assets");

  dispatch({ type: FETCH_CRYPTO, payload: response.data });
};
