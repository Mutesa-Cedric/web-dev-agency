import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />} path="/">
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Services />} path="/services" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
