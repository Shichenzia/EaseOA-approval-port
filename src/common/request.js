import { REQUEST_DOMAIN, TOKEN_STORAGE_KEY } from "./constants";

const axios = require("axios");

const RPC = (config = {}) => {
  const { type = "post", operate = "", data = {} } = config;
  const url = `${REQUEST_DOMAIN}${operate}`;
  const token = window.$cookies.get(TOKEN_STORAGE_KEY);
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url,
      responseType: "json",
      data: {
        ...data,
        token,
      },
    })
      .then((response = {}) => {
        const { data } = response;
        const { result } = data;

        if (result === "ok") {
          resolve(data);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default RPC;
