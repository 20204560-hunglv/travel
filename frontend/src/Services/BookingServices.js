import axios from "../utils/axios";

export async function get(username) {
  try {
    const response = await axios.get(`/api/v1/users/tour/${username}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function update(username, dataUpdate) {
  try {
    await axios.put(`/api/v1/users/tour/${username}`, dataUpdate);
  } catch (error) {
    throw error;
  }
}
