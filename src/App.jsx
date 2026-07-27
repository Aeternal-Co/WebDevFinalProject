import { Route, Routes } from "react-router";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <BlogPostsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/posts/:id"
          element={<IndividualPostPage />}
        />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
