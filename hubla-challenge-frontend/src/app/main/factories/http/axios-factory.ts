import axios, { AxiosInstance } from 'axios';

export const makeAxios = (): AxiosInstance => {
  const { NEXT_PUBLIC_API_BASE_URL } = process.env;
  return axios.create({
    baseURL: NEXT_PUBLIC_API_BASE_URL
  });
};
