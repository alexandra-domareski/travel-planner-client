import apiClient from "../../../services/apiClient";
import type { Trip } from "../types/trip.types";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token found");
};

export const tripService = {
  getAllTrips: async (): Promise<Trip[]> => {
    const { data } = await apiClient.get("/trips");
    return data;
  },

  getTripById: async (id: string): Promise<Trip> => {
    const { data } = await apiClient.get(`/trips/${id}`);
    return data;
  },

  createTrip: async (formData: FormData): Promise<Trip> => {
    checkAuth();
    const { data } = await apiClient.post("/trips", formData);
    return data;
  },

  updateTrip: async (id: string, formData: FormData): Promise<Trip> => {
    checkAuth();
    const { data } = await apiClient.put(`/trips/${id}`, formData);
    return data;
  },

  deleteTrip: async (id: string): Promise<void> => {
    checkAuth();
    await apiClient.delete(`/trips/${id}`);
  },
};
