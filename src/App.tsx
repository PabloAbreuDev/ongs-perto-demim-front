import Home from "./pages/home";
import Login from "./pages/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProtectedRoute from "./components/protected-route";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </Layout>
          }
        />


        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};
