import { motion } from "framer-motion";
import { ArrowLeft, Mic, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NetflixEpisodeCard from "@/components/series/NetflixEpisodeCard";

const ThamizhumNaanumPodcast = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Generate 21 episodes with placeholder titles
  const episodes = Array.from({ length: 21 }, (_, index) => ({
    id: `episode-${index + 1}`,
    title: `Episode ${index + 1}: -`,
    description: "Tamil storytelling and cultural narratives exploring traditions and modern perspectives.",
    thumbnail: "/Thamizhum Naanum .png",
    duration: `${Math.floor(Math.random() * 30) + 20} min`,
    status: "completed" as const,
    badge: "Podcast",
    link: "#",
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Series Header */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <img
                    src="/Thamizhum Naanum .png"
                    alt="Thamizhum Naanum Podcast"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Thamizhum Naanum Podcast</h1>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
                  Tamil storytelling and cultural narratives through podcasting, exploring traditions and modern perspectives. A journey through Tamil culture, stories, and contemporary insights.
                </p>
                
                {/* Series Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span className="text-muted-foreground">Started 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">{episodes.length} Episodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-yellow-500" />
                    <span className="text-muted-foreground">Tamil Culture</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold">Episodes</h2>
            <div className="text-sm text-muted-foreground">
              {episodes.length} episode{episodes.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Netflix-style Episodes List */}
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.05) }}
              >
                <NetflixEpisodeCard {...episode} />
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">More Episodes Coming Soon</h3>
              <p className="text-muted-foreground">
                Stay tuned for more Tamil storytelling, cultural insights, and contemporary perspectives in upcoming episodes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThamizhumNaanumPodcast;
