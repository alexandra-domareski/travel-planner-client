import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import logo from "../assets/images/travel-planner-logo.png";

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F2F1] p-6">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <img
          src={logo}
          alt="travel planner logo"
          className="w-[300px] h-[300px] mx-auto"
        />
        <h2 className="text-2xl font-bold text-center text-[#1F2937]">
          Welcome to your Travel Planner
        </h2>

        <div className="mt-5">
          <Link to="/login">
            <Button type="submit" className="w-full mb-3">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button type="submit" className="w-full">
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
