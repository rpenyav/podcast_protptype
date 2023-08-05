import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  </Router>
);

export default App;
