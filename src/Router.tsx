import React from "react";
import { Routes, Route } from "react-router-dom";

import { RouterLayout } from "./common/RouterLayout";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
      <Route path="/" element={<HomePage />}/>
      </Route>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
  );
};
