import { motion } from "framer-motion";
import { ArrowLeft, PenSquare, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NetflixEpisodeCard from "@/components/series/NetflixEpisodeCard";

const WritingContent = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const episodes = [
    {
      id: "systems-vs-goals",
      title: "Systems > Goals: Why it's important to distinguish",
      description: "A reflection inspired by Atomic Habits on why systems—not goals—drive real, repeatable progress.",
      thumbnail: "./placeholder.svg",
      status: "completed" as const,
      badge: "Essay",
      link: "/systems-vs-goals",
      icon: <PenSquare className="w-8 h-8 text-purple-500" />,
    },
    {
      id: "living-life-to-fullest",
      title: "My thoughts on \"Living life to its fullest\". Trappings of defining what is \"wholesome\"",
      description: "Exploring the complexities of what it means to live fully and the pitfalls of prescriptive definitions of a meaningful life.",
      thumbnail: "./placeholder.svg",
      status: "completed" as const,
      badge: "Essay",
      link: "/living-life-fullest",
      icon: <PenSquare className="w-8 h-8 text-purple-500" />,
    },
    {
      id: "look-within",
      title: "Why it is most important to look within and how it will help you stay the course.",
      description: "A reflection on the power of introspection and self-awareness in maintaining direction and purpose.",
      thumbnail: "./placeholder.svg",
      status: "completed" as const,
      badge: "Essay",
      link: "/look-within",
      icon: <PenSquare className="w-8 h-8 text-purple-500" />,
    },
    {
      id: "reduce-anxiety-tips",
      title: "4 tips to reduce anxiety, slumps and build an impenetrable mental fortress",
      description: "Practical strategies for managing mental health challenges and building resilience in everyday life.",
      thumbnail: "./placeholder.svg",
      status: "completed" as const,
      badge: "Essay",
      link: "/reduce-anxiety-tips",
      icon: <PenSquare className="w-8 h-8 text-purple-500" />,
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
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-border">
                  <PenSquare className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Writing & Content</h1>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
                  Articles and reflections—short, opinionated, and practical.
                </p>
                
                {/* Series Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span className="text-muted-foreground">Started 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">{episodes.length} Article{episodes.length !== 1 ? 's' : ''}</span>
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
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <NetflixEpisodeCard {...episode} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WritingContent;


