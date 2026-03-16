import { useEffect, useState } from "react";
import { tripService } from "../services/trip.service";
import type { Trip } from "../types/trip.types";

export function useTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    tripService
      .getAllTrips()
      .then(setTrips)
      .catch((err) => {
        console.error("Failed to load trips", err);
        setError("Failed to load trips");
      });
  }, []);

  return { trips, loading, error };
}
