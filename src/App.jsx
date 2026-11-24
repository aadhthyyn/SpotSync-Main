import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FindParking from "./pages/FindParking";
import MyBookings from "./pages/MyBooking";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import ParkingDetails from "./pages/ParkingDetails";
import AIAssistant from "./pages/AIAssistant";
import Profile from "./pages/Profile";
import ManageParking from "./pages/owner/ManageParking";
import OwnerBookings from "./pages/owner/OwnerBookings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import Auth from "./pages/Auth";
import OwnerSidebar from "./component/OwnerSidebar";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-parking" element={<FindParking />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        <Route path="/parking/:id" element={<ParkingDetails />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/owner/sidebar" element={<OwnerSidebar />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/manage-parking" element={<ManageParking />} />
        <Route path="/owner/bookings" element={<OwnerBookings />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
      </Routes>
    </>
  );
}

export default App;
