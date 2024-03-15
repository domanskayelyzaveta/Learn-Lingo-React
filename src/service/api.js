// https://learn-lingo-backend-2.onrender.com/api/teachers //auth/signup  //auth/signin

import axios from "axios";

export const BASE_URL = "https://learn-lingo-backend-2.onrender.com/api";
const $instance = axios.create({ baseURL: BASE_URL });

export const fetchTeachers = async (page = 1, limit = 4) => {
  const { data } = await $instance.get("/teachers", {
    params: {
      page: page,
      limit: limit,
    },
  });

  return data;
};
