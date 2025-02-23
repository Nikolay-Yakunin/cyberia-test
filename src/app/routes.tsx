// routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import ProjectPage from "@/pages/ProjectPage/ProjectPage";
import App from "@/App";

const AppRoutes = () => {
  return (
    <Router basename="/cyberia-test">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="projects" element={<ProjectPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
    </div>
  );
};

export default AppRoutes;
