import type { Trip } from "../features/trips/types/trip.types";

export type User = {
  id: string;
  email: string;
  password: string;
  name?: string | null;
  avatarURL?: string | null;
  createdAt: Date;

  trips?: Trip[];
};
