import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Header from "../Compnents/Header/Header";

export const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <Suspense fallback={null}></Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
