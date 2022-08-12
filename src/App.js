import React from "react";
import { Routes, Route } from "react-router-dom";

import AllMeetUpPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavouritePage from "./pages/Favourite";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpPage />}></Route>
        <Route path="/meet-up" element={<NewMeetUpPage />}></Route>
        <Route
          path="/favourite"
          element={<FavouritePage></FavouritePage>}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
