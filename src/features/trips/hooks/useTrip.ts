import { useEffect, useState } from "react";
import { tripService } from "../services/trip.service";
import type { Trip } from "../types/trip.types";

export function useTrip(id: string) {
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    tripService
      .getTripById(id)
      .then(setTrip)
      .catch(() => setError("Failed to load trip"))
      .finally(() => setLoading(false));
  }, [id]);

  return { trip, loading, error };
}
