import Card from "../../../components/ui/Card";
import { useTrips } from "../hooks/useTrips";
import { Link } from "react-router-dom";

const TripCard = () => {
  const { trips } = useTrips();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <Link to={`/trips/${trip.id}`} key={trip.id}>
          <Card
            title={trip.title}
            destination={trip.destination}
            startDate={trip.startDate.toString()}
            endDate={trip.endDate.toString()}
            coverImage={trip.coverImage ?? undefined}
          />
        </Link>
      ))}
    </div>
  );
};
export default TripCard;
