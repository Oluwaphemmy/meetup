import React from "react";
import { Routes, Route } from "react-router-dom";

import AllMeetUpPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavouritePage from "./pages/Favourite";
import MainNav from "./pages/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<AllMeetUpPage />}></Route>
        <Route path="/meet-up" element={<NewMeetUpPage />}></Route>
        <Route
          path="/favourite"
          element={<FavouritePage></FavouritePage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
