import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
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
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
