import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import localRoutes from "./routes";
const routes = [...localRoutes];

const ProtectedRoutes = () => (
  <Suspense fallback={<div>Loading ....</div>}>
    <Routes>
      {routes.map(({ component: Component, path }) => (
        <Route path={path} key={path} element={<Component />} />
      ))}
    </Routes>
  </Suspense>
);

export default ProtectedRoutes;
