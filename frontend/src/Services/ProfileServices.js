import axios from "../utils/axios";

export async function get(username) {
  try {
    const response = await axios.get(`/api/v1/user/${username}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function save(username, { fullName, email, address, gender }) {
  try {
    console.log(fullName, email, address, gender);
    await axios.put(`/api/v1/user_crud/${username}`, {
      fullname: fullName,
      email: email,
      address: address,
      gender: gender,
    });
  } catch (error) {
    console.log(error);
  }
}
