import { Route, Routes } from "react-router-dom";

import { Profile } from "../../ui/profile/Profile";
import { UsersPages } from "../pages/UsersPages";

export const UsersRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="user-panel" element={<UsersPages />} />
        <Route path="user-profile" element={<Profile />} />
      </Routes>
    </>
  );
};
