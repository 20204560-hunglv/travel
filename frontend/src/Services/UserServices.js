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

export const update = async (id, data) => {
  try {
    await axios.put(`/api/v1/user_crud/${id}`, {
      password: data.passWord,
      fullname: data.fullName,
      email: data.email,
      address: data.address,
      gender: data.gender,
    });
  } catch (error) {
    throw error;
  }
};

export async function create(data) {
  return await axios.post("/api/v1/users", {
    ...data,
  });
}
