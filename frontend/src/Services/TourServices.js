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
    return response;
  } catch (error) {
    throw error;
  }
}

export async function add(
  name,
  startTime,
  period,
  urlImage,
  prices,
  countryFrom,
  countryTo
) {
  try {
    await axios.post(`/api/v1/tours`, {
      name: name,
      start_time: startTime,
      period: period,
      main_image_url: urlImage,
      prices: prices,
      addressFrom: countryFrom,
      addressTo: countryTo,
    });
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
    await axios.put(`/api/v1/tour/${id}`, {
      name: data.name,
      start_time: data.start_time,
      period: data.period,
      main_image_url: data.main_image_url,
      prices: data.prices,
      addressFrom: data.addressFrom,
      addressTo: data.addressTo,
    });
  } catch (error) {
    throw error;
  }
}
