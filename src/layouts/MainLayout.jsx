import { Outlet } from "react-router-dom";
import Sidenav from "../components/Sidenav";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      {/* Sidenav (Basicamente el dashboard) */}
      <Sidenav />
      <Outlet />
    </div>
  );
};
export default MainLayout;
