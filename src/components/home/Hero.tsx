import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-image-1.jpg')`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 z-20 flex items-end pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Hi, I'm Zafir
              <span className="block text-white font-black relative">
                <span className="absolute inset-0 text-red-500 blur-sm">Your Next Story</span>
                Your Next Story
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Microsoft AI Specialist • National Basketball Player • Tamil Storyteller • Tech Entrepreneur—
              <span className="text-foreground font-semibold"> binge-watch my journey</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-all"
                onClick={() => {
                  const seriesSection = document.getElementById('my-journey');
                  seriesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.button>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-card hover:bg-accent text-foreground font-semibold rounded-lg border border-border transition-all"
                >
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
