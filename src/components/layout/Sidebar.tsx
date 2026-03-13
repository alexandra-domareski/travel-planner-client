import { NavLink } from "react-router-dom";
import {
  CirclePlus,
  House,
  Map,
  Calendar,
  Heart,
  Settings,
} from "lucide-react";

const baseLink =
  "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium";

const activeLink = "bg-[#EFF6FF] text-[#3B82F6]";
const hoverLink = "hover:bg-[#F3F4F6] text-[#1F2937]";

const navItems = [
  { to: "/dashboard", icon: House, label: "Dashboard" },
  { to: "/trips", icon: Map, label: "My Trips" },
  { to: "/calendar", icon: Calendar, label: "Calendar" },
  { to: "/saved", icon: Heart, label: "Saved" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-[#F3F4F6] flex flex-col">
      <div className="px-6 py-6">
        <NavLink
          to="/trips/new"
          end
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#3B82F6] hover:bg-[#60A5FA] transition-colors"
        >
          <CirclePlus className="size-5 text-white" />
          <span className="text-sm font-semibold text-white">New Trip</span>
        </NavLink>
      </div>

      <nav className="flex flex-col gap-1 px-4 flex-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/dashboard"}
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : hoverLink}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`size-5 ${isActive ? "text-[#3B82F6]" : "text-[#9CA3AF]"}`}
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
