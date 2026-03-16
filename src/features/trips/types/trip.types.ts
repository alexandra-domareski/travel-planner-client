export type Trip = {
  id: string;
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  coverImage?: string | null;
  createdAt: Date;
  userId: string;
};
