import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center pt-16">
        <motion.div 
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-8"
          >
            <Search className="w-20 h-20 text-muted-foreground" />
          </motion.div>
          
          <h1 className="mb-6 text-6xl sm:text-7xl font-bold bg-gradient-to-r from-speaking via-career to-essays bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground">
            Episode Not Found
          </h2>
          
          <p className="mb-8 text-lg text-muted-foreground">
            This episode seems to have been removed from the catalogue. 
            Let's get you back to the main series.
          </p>
          
          <motion.a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-speaking hover:bg-speaking-glow text-white font-semibold rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            Return to Home
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
