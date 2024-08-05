// Archivo cuyo proposito es almacenar las rutas y sus componentes asociados de la sidenav
import {
  FaHouseChimney,
  FaUserGear,
  FaRegCircleQuestion,
  FaBuildingCircleExclamation,
} from "react-icons/fa6";

// Estilos de los iconos
const iconStyle = {
  className: "text-white",
  size: 20,
};

export const SIDEBAR_ROUTES = [
  {
    // Rutas principales de la sidenav
    layout: "Principal",
    pages: [
      {
        title: "Inicio",
        path: "/dashboard/inicio",
        icon: <FaHouseChimney {...iconStyle} />,
      },
      {
        title: "Monitoreo de Usuarios",
        path: "/dashboard/usuarios",
        icon: <FaUserGear {...iconStyle} />,
      },
      {
        title: "Solicitudes de Kioskos",
        path: "/dashboard/kioskos",
        icon: <FaBuildingCircleExclamation {...iconStyle} />,
      },
    ],
  },
  {
    // Rutas secundarias de la sidenav
    layout: "Secundario",
    pages: [
      {
        title: "Ayuda y soporte",
        path: "/dashboard/*",
        icon: <FaRegCircleQuestion {...iconStyle} />,
      },
    ],
  },
];
