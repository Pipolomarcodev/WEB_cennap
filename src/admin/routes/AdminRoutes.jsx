import { Route, Routes } from "react-router-dom";
import { AdminControlPage } from "../page/AdminControlPage";
import { AdminFormPage } from "../page/AdminFormPage";
import { UserControlPanel } from "../page/UserControlPanel";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="admin-panel" element={<AdminControlPage />} />
        <Route path="user-panel" element={<UserControlPanel />} />
        <Route path="form" element={<AdminFormPage />} />
      </Routes>
    </>
  );
};
