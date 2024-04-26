import axios from "../utils/axios";

export async function login(username, password) {
  try {
    const response = await axios.post("/api/v1/login", {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function signUp(username, password) {
  try {
    await axios.post("/api/v1/signup", {
      username: username,
      password: password,
    });
  } catch (error) {
    throw error;
  }
}

export async function changePass(username, { pass, newPass }) {
  try {
    await axios.put(`api/v1/change_password/${username}`, {
      pass: pass,
      newPass: newPass,
    });
  } catch (error) {
    throw error;
  }
}
