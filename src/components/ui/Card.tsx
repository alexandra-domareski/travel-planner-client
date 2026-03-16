import { MapPin, Calendar, DollarSign } from "lucide-react";

type CardProps = {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  coverImage?: string | null;
  budget?: number;
  totalBudget?: number;
  status?: "Upcoming" | "Ongoing" | "Completed";
  image?: string;
};

const statusColors = {
  Upcoming: "bg-white text-[#3B82F6]",
  Ongoing: "bg-white text-[#16A34A]",
  Completed: "bg-white text-[#6B7280]",
};

const Card = ({
  title,
  destination,
  startDate,
  endDate,
  budget = 0,
  totalBudget = 0,
  status = "Upcoming",
  image,
}: CardProps) => {
  const budgetPercent = totalBudget > 0 ? (budget / totalBudget) * 100 : 0;

  return (
    <div className="w-72 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-44">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#BFDBFE]" />
        )}

        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#1F2937]">{title}</h2>
          <p className="flex items-center gap-1 text-sm text-[#6B7280] mt-0.5">
            <MapPin className="size-4" /> {destination}
          </p>
        </div>

        <p className="flex items-center gap-2 text-sm text-[#1F2937]">
          <Calendar className="size-4 text-[#9CA3AF]" />
          {startDate} - {endDate}
        </p>

        {totalBudget > 0 && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-[#1F2937] font-medium">
                <DollarSign className="size-4 text-[#9CA3AF]" /> Budget
              </span>
              <span className="text-[#1F2937]">
                €{budget.toLocaleString()} / €{totalBudget.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-[#E5E7EB] rounded-full h-2">
              <div
                className="bg-[#3B82F6] h-2 rounded-full"
                style={{ width: `${budgetPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
