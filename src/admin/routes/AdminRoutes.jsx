import { Route, Routes } from "react-router-dom";
import { AdminControlPage } from "../page/AdminControlPage";
import { AdminFormPage } from "../page/AdminFormPage";
import {Profile} from "../../ui/profile/Profile";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="admin-panel" element={<AdminControlPage />} />
        <Route path="form" element={<AdminFormPage />} />
        <Route
          path="admin-profile"
          element={<Profile link={"admin"} link2={"admin-panel"} />}
        />
      </Routes>
    </>
  );
};
