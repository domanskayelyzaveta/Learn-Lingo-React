// https://learn-lingo-backend-2.onrender.com/api/teachers //auth/signup  //auth/signin

import axios from "axios";

export const BASE_URL = "https://learn-lingo-backend-2.onrender.com/api";
const $instance = axios.create({ baseURL: BASE_URL });

export const setToken = (token) => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  $instance.defaults.headers.common.Authorization = "";
};

export const fetchTeachers = async (page = 1, limit = 4) => {
  const { data } = await $instance.get("/teachers", {
    params: {
      page: page,
      limit: limit,
    },
  });

  return data;
};

export const signup = async (userData) => {
  const { data } = await $instance.post("/auth/signup", userData);
  setToken(data.token);
  return data;
};

export const signin = async (userData) => {
  const { data } = await $instance.post("/auth/signin", userData);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await $instance.post("/auth/logout");
  clearToken();
  return data;
};
