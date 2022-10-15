import axios from 'axios';

export const axiosInstance = () => {
  //axios instance to use globally
  return axios.create({
    baseURL: process.env.VUE_APP_BACKEND,
    withCredentials: false,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
