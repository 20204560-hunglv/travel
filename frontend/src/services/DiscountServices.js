import axios from "../utils/axios";
import * as TourServices from "../services/TourServices";

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

export const getOne = async (id) => {
  const response = await axios.get(`/api/v1/discount/${id}`);
  return response.data.data;
};

export async function getAllByAdmin() {
  try {
    const response = await axios.get("/api/v1/discounts");
    const discounts = response.data.data;
    const newDiscounts = await Promise.all(
      discounts.map(async (elem) => {
        const toursId = elem.tours;
        const tours = await Promise.all(
          toursId.map(async (elem) => {
            const resp = await TourServices.get(elem);
            return resp;
          })
        );
        return {
          ...elem,
          tours,
        };
      })
    );

    return newDiscounts;
  } catch (error) {
    throw error;
  }
}

/**
 *
 * @param {object} data
 */
export const create = async (data) => {
  try {
    const resp = await axios.post("/api/v1/discounts", data);
    return resp.data;
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
