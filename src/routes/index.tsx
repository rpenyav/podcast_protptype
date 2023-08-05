// routes/index.tsx
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PodcastView = lazy(() => import("../pages/PodcastView"));
const PodcastSearch = lazy(() => import("../pages/PodcastSearch"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PodcastView />} />
    <Route path="/search" element={<PodcastSearch />} />
  </Routes>
);

export default AppRoutes;
