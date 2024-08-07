import axios from "../utils/axios";
import { get as getTour } from "./TourServices";
import { get as getCustomer } from "./ProfileServices";

/**
 *
 * @returns {Promise<>}
 */
export const get = async () => {
  try {
    const resp = await axios.get("/api/v1/orders");

    const orders = resp.data.data;
    const newOrders = await Promise.all(
      orders.map(async (order) => {
        const customerId = order.customerId;
        const tourId = order.tourId;
        const [customer, tour] = await Promise.all([
          getCustomer(customerId),
          getTour(tourId),
        ]);
        return {
          ...order,
          customer: customer.data,
          tour: tour,
        };
      })
    );
    return newOrders;
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {string} customerId
 * @returns
 */
export const getByCustomer = async (customerId) => {
  try {
    const resp = await axios.get(`/api/v1/order/${customerId}`);

    const orders = resp.data.data;
    return await Promise.all(
      orders.map(async (order) => {
        const tourId = order.tourId;
        const [customer, tour] = await Promise.all([
          getCustomer(customerId),
          getTour(tourId),
        ]);
        return {
          ...order,
          customer: customer.data,
          tour: tour,
        };
      })
    );
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
    await axios.post("/api/v1/orders", data);
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
    await axios.delete(`/api/v1/order/${id}`);
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
    await axios.put(`/api/v1/order/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const updateSlotStill = async ({ field, value, tourId }) => {
  await axios.post(`/api/v1/slot-still`, { field, value, tourId });
};
