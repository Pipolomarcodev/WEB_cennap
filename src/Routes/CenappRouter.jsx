import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../home/page/HomePage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { UsersRoutes } from "../user/routes/UsersRoutes";

export const CenappRouter = () => {
  return (
    <>
      <Routes>
        {/* Home con paginación */}
        <Route path="/home/*" element={<HomePage />} />
        {/* Auth */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/user/*" element={<UsersRoutes />} />
        {/* por defeto del path te llama a home page */}
        <Route path="/*" element={<Navigate to="/home/:page" />} />
      </Routes>
    </>
  );
};
