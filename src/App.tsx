import Home from "./pages/home";
import Login from "./pages/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProtectedRoute from "./components/protected-route";
import CreateOng from "./pages/ong/create";
import Ong from "./pages/ong";
import SeeOng from "./pages/ong/see";

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
        <Route
          path="ong"
          element={
            <Layout>
              <Ong />
            </Layout>
          }
        >
          <Route
            path=":id"
            element={
              <SeeOng />
            }
          />
          <Route
            path="criar"
            element={
              <ProtectedRoute>
                <CreateOng />
              </ProtectedRoute>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
