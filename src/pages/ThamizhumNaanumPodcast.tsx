import { motion } from "framer-motion";
import { ArrowLeft, Mic, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NetflixEpisodeCard from "@/components/series/NetflixEpisodeCard";
import PodcastEpisodeCard from "@/components/series/PodcastEpisodeCard";

const ThamizhumNaanumPodcast = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Common links for all episodes
  const commonLinks = {
    spotifyLink: "https://open.spotify.com/show/2mhQKOa23FJdVVaDwbzDkN?si=da1dac258b9b426f",
    youtubeLink: "https://www.youtube.com/@zafir.tamizh/podcasts",
  };

  // Episodes 1-11 with proper titles and descriptions
  const podcastEpisodes = [
    {
      id: "episode-1",
      title: "Episode 1: Na Muthukumar 😭",
      description: "What's your favourite Na Muthukumar line? Come hear what's mine!",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "8 min",
      ...commonLinks,
    },
    {
      id: "episode-2",
      title: "Episode 2: கவிப்பேர-ரசு Vairamuthu",
      description: "Exploring the poetic genius of Vairamuthu and his contribution to Tamil literature.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "10 min",
      ...commonLinks,
    },
    {
      id: "episode-3",
      title: "Episode 3: கவிப்பேர-ரசு Vairamuthu Pt2",
      description: "Continuing our journey through Vairamuthu's beautiful Tamil poetry and lyrics.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "12 min",
      ...commonLinks,
    },
    {
      id: "episode-4",
      title: "Episode 4: Natpu na enna theriyuma! ❤️‍🩹",
      description: "Come join me this week to talk about friendship through some tamil movies, songs and literature!",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "15 min",
      ...commonLinks,
    },
    {
      id: "episode-5",
      title: "Episode 5: Natpu na enna theriyuma! ❤️‍🩹 (Pt 2)",
      description: "Continuing our exploration of friendship in Tamil cinema and literature.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "14 min",
      ...commonLinks,
    },
    {
      id: "episode-6",
      title: "Episode 6: Padi da parama! 😤",
      description: "Let's talk about education and its importance through Tamil culture and language.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "11 min",
      ...commonLinks,
    },
    {
      id: "episode-7",
      title: "Episode 7: Conversations! 🗣️",
      description: "Exploring the art of conversations in Tamil culture and daily life.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "9 min",
      ...commonLinks,
    },
    {
      id: "episode-8",
      title: "Episode 8: Kavignar Vaali! 🤩",
      description: "Celebrating the legendary Tamil poet and lyricist Kavignar Vaali's timeless works.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "13 min",
      ...commonLinks,
    },
    {
      id: "episode-9",
      title: "Episode 9: Na Muthukumarin kavithai 🤩",
      description: "Diving deep into Na Muthukumar's beautiful poetry and poetic expressions.",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "10 min",
      ...commonLinks,
    },
    {
      id: "episode-10",
      title: "Episode 10: Tamil Nadu! Tamil country? 🤔",
      description: "Have you wondered how a state got its name that translates to 'Tamil Country'? Come join me in exploring the name Tamil Nadu a little!",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "6 min",
      ...commonLinks,
    },
    {
      id: "episode-11",
      title: "Episode 11: Veyyon! 🌞",
      description: "Come join me in learning a new tamil word!",
      thumbnail: "/Thamizhum Naanum .png",
      duration: "7 min",
      ...commonLinks,
    },
  ];

  // Generate remaining 10 episodes with placeholder titles
  const remainingEpisodes = Array.from({ length: 10 }, (_, index) => ({
    id: `episode-${index + 12}`,
    title: `Episode ${index + 12}: -`,
    description: "Tamil storytelling and cultural narratives exploring traditions and modern perspectives.",
    thumbnail: "/Thamizhum Naanum .png",
    duration: `${Math.floor(Math.random() * 30) + 20} min`,
    status: "completed" as const,
    badge: "Podcast",
    link: "#",
  }));

  const allEpisodes = [...podcastEpisodes, ...remainingEpisodes];

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
                  <span className="text-muted-foreground">{allEpisodes.length} Episodes</span>
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
              {allEpisodes.length} episode{allEpisodes.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Episodes List */}
          <div className="space-y-4">
            {/* Episodes 1-11 with Spotify/YouTube links */}
            {podcastEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.05) }}
              >
                <PodcastEpisodeCard {...episode} />
              </motion.div>
            ))}

            {/* Remaining Episodes - Placeholders */}
            {remainingEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + ((podcastEpisodes.length + index) * 0.05) }}
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
