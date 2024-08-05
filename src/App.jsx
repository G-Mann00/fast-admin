import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AccesoDenegado from "./pages/AccesoDenegado";
import Error404 from "./pages/Error404";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/dashboard/Home";
import Kioskos from "./pages/dashboard/Kioskos";
import Usuarios from "./pages/dashboard/Usuarios";

const App = () => {
  return (
    <Routes>
      {/* Ruta principal (Va directo a Login) */}
      <Route path="/">
        <Route index element={<Navigate to="/login" replace />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/denegado" element={<AccesoDenegado />} />

      {/* Enrutamiento al Dashboard y sus rutas anidadas   */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route path="/dashboard/inicio" element={<Home />} />
        <Route path="/dashboard/kioskos" element={<Kioskos />} />
        <Route path="/dashboard/usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  );
};
export default App;
