import TripGrid from "../components/TripGrid";

const TripsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1F2937]">My Trips</h1>
      <p className="text-sm text-gray-500 mt-1">
        Plan and manage your travel adventures
      </p>
      <div className="mt-8">
        <TripGrid />
      </div>
    </div>
  );
};
export default TripsPage;
