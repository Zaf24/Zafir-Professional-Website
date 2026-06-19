import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Send } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[88svh] sm:min-h-[80vh] sm:h-[80vh] w-full overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('./hero-image-1.jpg')`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        {/* Stronger bottom gradient to keep text legible on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 sm:via-background/30 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 z-20 flex items-end pb-10 sm:pb-20 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          >
            <motion.h1
              className="text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
            >
              Hi, I'm Zafir
              <span className="block text-white font-black relative mt-1 sm:mt-2">
                <span aria-hidden className="absolute inset-0 text-red-500 blur-[6px] opacity-80">Your Next Story</span>
                <span className="relative">Your Next Story</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl md:text-2xl xl:text-3xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl xl:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Microsoft AI Specialist · National Basketball Player · Tamil Storyteller · Tech Entrepreneur —
              <span className="text-foreground font-semibold"> binge-watch my journey.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(239, 68, 68, 0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-all w-full sm:w-auto"
                onClick={() => {
                  const seriesSection = document.getElementById('my-journey');
                  seriesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="w-5 h-5 fill-current" />
                View My Work
              </motion.button>

              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md text-foreground font-semibold rounded-lg border border-white/15 transition-all w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
