import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import FirstPage from "./components/First page";
import Notes from "./components/Notes";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
