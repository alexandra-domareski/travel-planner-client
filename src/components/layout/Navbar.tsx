import SearchInput from "../ui/SearchInput";
import { useState } from "react";
import { Search, Bell, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <Link to="/">
        <h1 className="text-lg font-semibold">Travel Planner</h1>
      </Link>

      <div className="relative flex items-center">
        <Search className="absolute left-3 size-5 text-[#778873]" />
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search trips..."
          className="pl-10 rounded-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell className="size-5 text-[#778873]" />

        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || user?.email}`}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover border border-[#D4C8BE] cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-[#D4C8BE] z-50">
                <div className="px-4 py-3 border-b border-[#D4C8BE]">
                  <p className="text-sm font-semibold text-[#3A2A1A]">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3A2A1A] hover:bg-[#F7F2F1] transition"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        ) : isLoginPage ? (
          <Link to="/register">
            <button className="cursor-pointer flex items-center gap-2 rounded-md border border-[#D28625] bg-white px-4 py-2 text-sm font-semibold text-[#D28625] hover:bg-[#F7F2F1] transition">
              Register
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="cursor-pointer flex items-center gap-2 rounded-md bg-[#D28625] px-4 py-2 text-sm font-semibold text-white hover:bg-[#AB9983] transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
