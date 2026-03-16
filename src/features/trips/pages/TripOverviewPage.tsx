import { useParams, useNavigate } from "react-router-dom";
import { useTrips } from "../hooks/useTrips";
import { useState } from "react";
import {
  ArrowLeft,
  ClipboardPlus,
  CircleDollarSign,
  MapPinPlusInside,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Badge from "../../../components/ui/Pills";

const TripOverviewPage = () => {
  const { id } = useParams();
  const { trips } = useTrips();
  const [isChecked, setIsChecked] = useState(false);
  const nav = useNavigate();

  const trip = trips.find((t) => t.id === id);

  if (!trip) return <p>Trip not found</p>;

  return (
    <div>
      <Link to="/dashboard">
        <div className="flex gap-2 mb-5">
          <ArrowLeft />
          <h2>Back to Dashboard</h2>
        </div>
      </Link>

      <h1 className="text-2xl font-bold text-[#1F2937]">Trip Overview</h1>
      <p className="text-sm text-gray-500 mt-1">
        Manage your trip details and itinerary
      </p>
      <div className="flex gap-4 mt-8">
        <Link to="">
          <div className="w-72 flex items-center justify-center gap-2 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
            <ClipboardPlus className="size-4 text-[#3B82F6] rounded bg-[#EBF2FE]" />
            <h2 className="flex items-center text-md text-[#1F2937] m-2">
              Add Activity
            </h2>
          </div>
        </Link>

        <Link to="">
          <div className="w-72 flex items-center justify-center gap-2 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
            <CircleDollarSign className="size-4 text-[#3B82F6] rounded bg-[#EBF2FE]" />
            <h2 className="flex items-center text-md text-[#1F2937] m-2">
              Add Expense
            </h2>
          </div>
        </Link>

        <Link to="">
          <div className="w-72 flex items-center justify-center gap-2 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
            <MapPinPlusInside className="size-4 text-[#3B82F6] rounded bg-[#EBF2FE]" />
            <h2 className="flex items-center text-md text-[#1F2937] m-2">
              Add Place
            </h2>
          </div>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="mt-10 w-3/4 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow px-10 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-[#1F2937]">Upcomming Activities</h1>
            <p className="text-sm text-[#60A5FA] cursor-pointer">View All</p>
          </div>

          <div className="mt-5 flex items-center">
            <div className="flex-1">
              <img src={trip.coverImage} className="w-[100px] h-auto rounded" />
            </div>

            <div className="flex-1">
              <h2>{trip.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {trip.destination} • 10:00 AM
              </p>
            </div>

            <div className="flex-1">
              <p className="bg-[#softgreen]">
                <Badge status="ticketed" />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-1/4 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow px-10 py-5">
          <h1 className="text-xl text-[#1F2937] font-medium">Budget Summary</h1>
          <div className="flex justify-between">
            <h1 className="text-2xl text-[#1F2937] font-bold">€ 2,450</h1>
            <p className="text-sm text-gray-500 mt-1">of € 3,500</p>
          </div>

          <ul className="mt-2">
            <li>Accomoodation</li>
            <li>Activities</li>
            <li>Dinning</li>
          </ul>
          <Button
            type="button"
            onClick={() => nav("/trips")}
            disabled={false}
            className="mt-2"
            variant="secondary"
          >
            Detailed Report
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mt-10 w-3/4 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow px-10 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-[#1F2937]">Saved Places</h1>
            <p className="text-sm text-[#60A5FA] cursor-pointer">Open Map</p>
          </div>

          <div className="flex justify-between">
            <div className="mt-5 relative w-[300px] h-auto">
              <img src={trip.coverImage} className="w-full h-auto rounded" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded" />
              <h2 className="absolute bottom-2 left-2 text-white font-semibold text-sm drop-shadow-md">
                {trip.title}
              </h2>
            </div>

            <div className="mt-5 relative w-[300px] h-auto">
              <img src={trip.coverImage} className="w-full h-auto rounded" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded" />
              <h2 className="absolute bottom-2 left-2 text-white font-semibold text-sm drop-shadow-md">
                {trip.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-10 w-1/4 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow px-10 py-5">
          <h1 className="text-xl text-[#1F2937] font-medium">
            Packing Progress
          </h1>
          <Input
            type={"checkbox"}
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label="T-shirt"
            className="mt-4 flex flex-row-reverse"
          />
          <hr className="my-8 border-gray-300"></hr>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 mt-1">8 of 12 items packed</p>{" "}
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TripOverviewPage;
