import axios from "../utils/axios";

/**
 *
 * @returns {Promise<>}
 */
export const get = async () => {
  try {
    const resp = await axios.get("/api/v1/guides");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const resp = await axios.get(`/api/v1/guide/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {object} data
 * @return {Promise}
 */
export const create = async (data) => {
  try {
    await axios.post("/api/v1/guides", data);
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
export const edit = async ({ id, dataUpdate }) => {
  try {
    await axios.put("/api/v1/guides", { id, dataUpdate });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    await axios.delete(`/api/v1/guide/${id}`);
  } catch (error) {
    console.log(error);
  }
};
