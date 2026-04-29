import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/Users";
import UserDetails from "./pages/Users/userDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
