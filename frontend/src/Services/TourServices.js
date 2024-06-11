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
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTopTour(limit = 3) {
  try {
    const response = await axios.get(`/api/v1/tours?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function add(data) {
  try {
    await axios.post(`/api/v1/tours`, { ...data });
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

export async function update(id, data) {
  try {
    await axios.put(`/api/v1/tour/${id}`, { ...data });
  } catch (error) {
    throw error;
  }
}

export async function bookTour(id, tours) {
  try {
    await axios.post(`/api/v1/users/tour/${id}`, tours);
  } catch (error) {
    throw error;
  }
}
