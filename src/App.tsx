import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./components/common/NotFound";
import DashboardPage from "./pages/DashboardPage";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import CreateTrip from "./features/trips/components/CreateTrip";
import EditTrip from "./features/trips/components/EditTrip";
import TripsPage from "./features/trips/pages/TripsPage";
import TripOverviewPage from "./features/trips/pages/TripOverviewPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<TripsPage />} />
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/trips/new" element={<CreateTrip />} />
            <Route path="/trips/:id/edit" element={<EditTrip />} />
            <Route path="/trips/:id" element={<TripOverviewPage />} />
          </Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
