import React from "react";
import { Routes, Route } from "react-router-dom";

import { RouterLayout } from "./common/RouterLayout";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { CharacterPage } from "./pages/Character";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/character/:id" element={<CharacterPage />}/>
      </Route>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
  );
};
