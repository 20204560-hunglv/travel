import axios from "../utils/axios";

export async function get(id) {
  try {
    const response = await axios.get(`/api/v1/tours/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}


export async function getAll() {
  try {
    const response = await axios.get("/api/v1/tours");
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteTour(id) {
  try {
    await axios.delete(`/api/v1/tours/${id}`);
  } catch (error) {
    throw error;
  }
}