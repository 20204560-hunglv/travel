import axios from "../utils/axios";

export async function get() {
  try {
    const response = await axios.get("/api/v1/tours");
    return response;
  } catch (error) {
    throw error;
  }
}
