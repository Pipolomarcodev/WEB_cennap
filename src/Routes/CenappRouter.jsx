import { Route, Routes } from "react-router-dom";
import { HomePage } from "../home/page/HomePage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AdminRoutes } from "../admin/routes/AdminRoutes";

export const CenappRouter = () => {
  return (
    <>
     <Routes>
      {/* Home con paginación */}
      <Route path="/home/:page" element={<HomePage />} />
      {/* Auth */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
    </>
  );
};
