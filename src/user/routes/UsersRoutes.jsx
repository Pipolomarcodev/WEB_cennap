import { Route, Routes } from "react-router-dom";
import { Profile } from "../../ui/profile/Profile";
import { UsersPages } from "../pages/UsersPages";
import UserFavorite from "../components/UserFavorite/UserFavorite";
import { ReserveDetail } from "../../home/components/reservation/ReserveDetail";
import Reserve from "../../home/components/reservation/Reserve";

export const UsersRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="user-panel" element={<UsersPages />} />
        <Route
          path="user-profile"
          element={<Profile link={"user"} link2={"user-panel"} />}
        />
        <Route path="user-favorite" element={<UserFavorite />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="reservedetail" element={<ReserveDetail />} />
      </Routes>
    </>
  );
};
