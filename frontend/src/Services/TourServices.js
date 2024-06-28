import axios from "../utils/axios";
import * as GuideServices from "./GuideServices";

export async function get(id) {
  try {
    const response = await axios.get(`/api/v1/tours/${id}`);
    const tour = response.data;
    const tourGuide = tour.tourGuide;
    const guides = await Promise.all(
      tourGuide.map(async (guideId) => {
        const resp = (await GuideServices.getById(guideId)).data;
        return resp;
      }),
    );
    return {
      ...tour,
      tourGuide: guides,
    };
  } catch (error) {
    throw error;
  }
}

export async function getAll() {
  try {
    const response = await axios.get("/api/v1/tours");
    const tours = response.data.tours;
    const newTours = await Promise.all(
      tours.map(async (tour) => {
        const tourGuide = tour.tourGuide;
        const guides = await Promise.all(
          tourGuide.map(async (guideId) => {
            const resp = (await GuideServices.getById(guideId)).data;
            return resp;
          })
        );
        return {
          ...tour,
          tourGuide: guides,
        };
      })
    );

    return newTours;
  } catch (error) {
    throw error;
  }
}

export async function getAllByAdmin() {
  try {
    const response = await axios.get("/api/v1/tours?getAll=true");
    const tours = response.data.tours;
    const newTours = await Promise.all(
      tours.map(async (tour) => {
        const tourGuide = tour.tourGuide;
        const guides = await Promise.all(
          tourGuide.map(async (guideId) => {
            const resp = (await GuideServices.getById(guideId)).data;
            return resp;
          })
        );
        return {
          ...tour,
          tourGuide: guides,
        };
      })
    );

    return newTours;
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
