import axios from "axios";

var base_host = process.env.BASE_HOST
  ? process.env.BASE_HOST
  : "http://localhost:8000";
//POST
// const school_api = 'http://develop.works.vn:8000/schools';

export const _post = async (
  data,
  api,
  headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  another_host
) => {
  let host = base_host;

  if (another_host) {
    host = another_host;
  }

  let request_url = host + api;
  let response = await axios.post(request_url, data, { headers });
  return response.data;
};
//get
export const _get = async (
  params,
  api,
  headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  another_host
) => {
  let host = base_host;
  if (another_host) {
    host = another_host;
  }
  let request_url = host + api;
  let response = await axios.get(request_url, { params: params, headers });
  return response;
};
//delete
export const _delete = async (
  data,
  api,
  headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  another_host
) => {
  let host = base_host;
  if (another_host) {
    host = another_host;
  }
  let request_url = host + api;
  let response = await axios.delete(request_url, { data, headers });
  return response.data;
};
//put
export const _put = async (
  data,
  api,
  headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  another_host
) => {
  let host = base_host;
  if (another_host) {
    host = another_host;
  }
  let request_url = host + api;
  let response = await axios.put(request_url, data, { headers });
  return response;
};
