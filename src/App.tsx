import Home from "./pages/home";
import SignIn from "./pages/signin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
