import axios from "../utils/axios";

/**
 *
 * @returns {Promise<>}
 */
export const get = async () => {
  try {
    const resp = await axios.get("/api/v1/discounts");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
