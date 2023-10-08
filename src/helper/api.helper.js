import axios from 'axios';

const appApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  timeout: 1000 * 5,
});


export const setAuthToken = (token) => {
  if (token) {
    appApi.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete appApi.defaults.headers.Authorization ;
  }
};


export default appApi;