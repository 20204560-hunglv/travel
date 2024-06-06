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

/**
 *
 * @param {object} data
 */
export const create = async (data) => {
  try {
    await axios.post("/api/v1/discounts", data);
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
    await axios.delete(`/api/v1/discount/${id}`);
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
    await axios.put(`/api/v1/discount/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
