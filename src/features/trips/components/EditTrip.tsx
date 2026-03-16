import { useParams } from "react-router-dom";
import TripForm from "./TripForm";
import { tripService } from "../services/trip.service";
import { useTrip } from "../hooks/useTrip";

const EditTrip = () => {
  const { id } = useParams<{ id: string }>();
  const { trip, loading, error } = useTrip(id!);

  if (loading) return <p>Loading trip...</p>;
  if (error || !trip) return <p>{error ?? "Trip not found"}</p>;

  return (
    <div>
      <TripForm
        initialData={trip}
        onSubmit={(formData) => tripService.updateTrip(id!, formData)}
      />
    </div>
  );
};
export default EditTrip;
