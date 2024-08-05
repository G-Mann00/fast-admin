import logo from "../assets/img/fast-logo.svg";
import { Button, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { SIDEBAR_ROUTES } from "../routes";

const Sidenav = () => {
  return (
    <aside className="bg-gradient-to-br from-[#1a1a2e] to-[#0c0c15] -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
      <div className="relative">
        <img
          src={logo}
          className="w-fit max-w-[200px] h-fit max-h-[60px] mx-auto mt-9 mb-9"
        />
      </div>

      {/* Links de la sidenav */}
      <div className="m-4">
        {SIDEBAR_ROUTES.map(({ pages }, key) => (
          <ul key={key} className="flex flex-col gap-1">
            {pages.map(({ icon, title, path }) => (
              <li key={title}>
                <NavLink to={path}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={isActive ? "orange" : "FAST-Blue-Gray-100"}
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="white"
                        className="font-medium capitalize"
                      >
                        {title}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
        <Button
          variant="text"
          className="flex items-center gap-4 px-4 capitalize"
          fullWidth
        >
          <IoExitOutline size={20} className="text-white" />
          <Typography color="white" className="font-medium capitalize">
            Cerrar Sesion
          </Typography>
        </Button>
      </div>
    </aside>
  );
};
export default Sidenav;
