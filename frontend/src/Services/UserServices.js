import axios from "../utils/axios";

export const getAll = async () => {
  try {
    const response = await axios.get("/api/v1/users");
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`/api/v1/user/${id}`);
  } catch (error) {
    throw error;
  }
};
