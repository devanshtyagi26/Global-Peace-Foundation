import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import BlueEconomy from "./pages/BlueEconomy";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Diaspora from "./pages/Diaspora";

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 }, // Start slightly lower & smaller
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom ease for a smooth effect
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blueEconomy" element={<BlueEconomy />} />
              <Route path="/diaspora" element={<Diaspora />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
