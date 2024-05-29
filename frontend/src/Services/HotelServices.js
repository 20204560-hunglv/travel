import axios from "../utils/axios";

export const get = async () => {
  try {
    const response = await axios.get("/api/v1/hotels");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {object} data
 * @return {Promise}
 */
export const create = async (data) => {
  try {
    await axios.post("/api/v1/hotels", data);
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} id
 * @param {object} dataUpdate
 * @return {Promise}
 */
export const edit = async ({ id, data }) => {
  try {
    await axios.put(`/api/v1/hotel/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} id
 * @return {Promise}
 */
export const remove = async (id) => {
  try {
    await axios.delete(`/api/v1/hotel/${id}`);
  } catch (error) {
    console.log(error);
  }
};
