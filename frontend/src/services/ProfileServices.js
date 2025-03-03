import axios from "../utils/axios";

export async function get(id) {
  try {
    const response = await axios.get(`/api/v1/user/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function save(id, data) {
  try {
    await axios.put(`/api/v1/user_crud/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}
