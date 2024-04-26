import axios from "../utils/axios";

export async function get(id) {
  try {
    const response = await axios.get(`/api/v1/tours/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}
