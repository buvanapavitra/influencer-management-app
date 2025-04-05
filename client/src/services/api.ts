import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getInfluencers = (name?: string) => {
  const url = name ? `${BASE_URL}/influencers?name=${encodeURIComponent(name)}` : `${BASE_URL}/influencers`;
  return axios.get(url);
};

export const createInfluencer = (data: any) => {
  return axios.post(`${BASE_URL}/influencers`, data);
};

export const deleteInfluencer = (id: string) => {
  return axios.delete(`${BASE_URL}/influencers/${id}`);
};