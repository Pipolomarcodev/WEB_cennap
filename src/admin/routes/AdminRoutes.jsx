import { Route, Routes } from "react-router-dom";
import { AdminControlPage } from "../page/AdminControlPage";
import { AdminFormPage } from "../page/AdminFormPage";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="admin-panel" element={<AdminControlPage />} />
        <Route path="form" element={<AdminFormPage />} />
      </Routes>
    </>
  );
};
