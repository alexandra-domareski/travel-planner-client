import TripForm from "./TripForm";
import { tripService } from "../services/trip.service";

const CreateTrip = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1F2937]">
          Plan your next adventure
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter the details of your trip to start building your itinerary.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#F3F4F6] p-6">
        <TripForm
          initialData={null}
          onSubmit={(formData) => tripService.createTrip(formData)}
        />
      </div>
    </div>
  );
};
export default CreateTrip;
