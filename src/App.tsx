import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import AppRoutes from "./routes";

const App = () => (
  <Router>
    <Suspense fallback={<CircularProgress />}>
      <AppRoutes />
    </Suspense>
  </Router>
);

export default App;
