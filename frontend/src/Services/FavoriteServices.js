import axios from "../utils/axios";

export const get = async (tourId, customerId) => {
  const response = await axios.get(
    `/api/v1/favorite/?customerId=${customerId}&tourId=${tourId}`
  );
  return response.data.data;
};

export const create = async (tourId, customerId) => {
  await axios.post(`/api/v1/favorites`, {
    customerId,
    tourId,
  });
};

export const remove = async (id) => {
    await axios.delete(`/api/v1/favorite/${id}`)
};

