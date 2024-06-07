import axios from "../utils/axios";

export async function get(page = 1) {
  try {
    const response = await axios.get(`/api/v1/tours?page=${page}`);
    return response;
  } catch (error) {
    throw error;
  }
}
