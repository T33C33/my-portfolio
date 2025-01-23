import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import styles from './App.module.css';
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Skills />
                <Works />
                <Contact />
              </>
            }
          />
          <Route path="/seolympus" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
