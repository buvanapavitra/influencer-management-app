import axios from "axios";
import { Influencer } from "../types";
const BASE_URL = "http://localhost:5000/api";
export const createInfluencer = (data: Influencer) =>
  axios.post(`${BASE_URL}/influencers`, data);
export const getInfluencers = (name?: string) =>
  axios.get(`${BASE_URL}/influencers`, {
    params: { name },
  });
