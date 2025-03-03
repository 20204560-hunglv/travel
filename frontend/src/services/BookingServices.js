import axios from "../utils/axios";

export async function get(id) {
  try {
    const response = await axios.get(`/api/v1/users/tour/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function update(id, dataUpdate) {
  try {
    await axios.put(`/api/v1/users/tour/${id}`, dataUpdate);
  } catch (error) {
    throw error;
  }
}
