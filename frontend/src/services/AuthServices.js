import axios from "../utils/axios";

export async function login(username, password) {
  try {
    return await axios.post("/api/v1/login", {
      username: username,
      password: password,
    });
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

/**
 *
 * @param username
 * @param password
 * @param email
 * @returns {Promise<void>}
 */
export async function signUp({ username, password, email }) {
  try {
    await axios.post("/api/v1/signup", {
      username,
      password,
      email,
    });
  } catch (e) {
    throw new Error(e.response.data.error);
  }
}

export async function changePass(_id, { pass, newPass }) {
  try {
    await axios.put(`api/v1/change_password/${_id}`, {
      pass: pass,
      newPass: newPass,
    });
  } catch (error) {
    throw error;
  }
}

export async function loginAdmin(name, pass) {
  try {
    return await axios.post("/api/v1/login_admin", {
      username: name,
      password: pass,
    });
  } catch (error) {
    throw error;
  }
}

export async function requestVerify(customerId, email) {
  await axios.post(`/api/v1/verify-email/${customerId}`, {
    email,
  });
}

export async function checkVerify(customerId, OTP) {
  return await axios.post(`/api/v1/check-otp-email/${customerId}`, {
    OTP,
  });
}
