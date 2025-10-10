import { motion } from "framer-motion";
import { ArrowLeft, Code, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NetflixEpisodeCard from "@/components/series/NetflixEpisodeCard";

const KeyProjects = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const episodes = [
    {
      id: "professional-website",
      title: "Professional Website Project",
      description: "A comprehensive personal portfolio website showcasing professional achievements, built with modern web technologies and responsive design principles.",
      thumbnail: "./favicon.svg",
      status: "in-progress" as const,
      badge: "Portfolio",
      link: "https://github.com/zafirmain/professional-website",
    },
    {
      id: "copilot-workshop",
      title: "Microsoft Copilot Studio Agentic Workshop",
      description: "Interactive workshop on building intelligent agents using Microsoft Copilot Studio, covering conversational AI, automation, and enterprise integration.",
      thumbnail: "./copilot-studio.png.webp",
      status: "in-progress" as const,
      badge: "Workshop",
      link: "https://github.com/zafirmain/copilot-workshop",
    },
  ];

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
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-border">
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Key Projects</h1>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
                  Transformative AI projects and technical implementations that demonstrate practical application of cutting-edge technologies and innovative solutions.
                </p>
                
                {/* Series Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-muted-foreground">Started 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">{episodes.length} Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-yellow-500" />
                    <span className="text-muted-foreground">Open Source</span>
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
              {episodes.length} project{episodes.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Netflix-style Episodes List */}
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                Stay tuned for additional AI projects, technical implementations, and innovative solutions as I continue building impactful technology solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyProjects;
