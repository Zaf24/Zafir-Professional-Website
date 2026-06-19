import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, UserRound, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: UserRound },
    { name: "Contact", path: "/contact", icon: Send },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_4px_20px_-8px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-background/80 via-background/40 to-transparent backdrop-blur-sm border-b border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center" aria-label="Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
            >
              ZAFIR
            </motion.div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link key={item.path} to={item.path} aria-label={item.name}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-3 sm:px-4 h-10 sm:h-10 min-w-[40px] justify-center rounded-full transition-colors ${
                      isActive
                        ? "bg-red-600 text-white shadow-[0_4px_16px_-6px_rgba(239,68,68,0.6)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                    <span className="text-sm font-medium hidden sm:inline">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
