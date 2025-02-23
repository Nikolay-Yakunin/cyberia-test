import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import { Header, Footer } from "@/shared/ui";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
