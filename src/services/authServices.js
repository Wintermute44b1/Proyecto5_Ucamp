import axios from "axios";

const URL_ROOT = "https://backend-proyecto-5-nl9s.onrender.com/api/auth";

const loginService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/login`, form);
  return resp;
};

const registerService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/register`, form);
  return resp;
};

const renewToken = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/renew`, {
    headers: {
      "x-token": localStorage.getItem("token")
    }
  });
  return resp;
};

export { loginService,registerService,renewToken };
