import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PodcastEpisodeCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  spotifyLink?: string;
  youtubeLink?: string;
}

const PodcastEpisodeCard = ({ 
  title, 
  description, 
  thumbnail, 
  duration,
  spotifyLink,
  youtubeLink
}: PodcastEpisodeCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 8 }}
      className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-purple-500/50 flex gap-4 h-auto min-h-32"
    >
      {/* Thumbnail */}
      <div className="relative w-48 h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex-shrink-0 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-grow p-4 flex flex-col justify-center min-w-0">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-grow min-w-0">
            <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
        
        {/* Links Section */}
        {(spotifyLink || youtubeLink) && (
          <div className="mt-4">
            <p className="text-xs text-muted-foreground mb-2">Listen on:</p>
            <div className="flex items-center gap-3">
              {spotifyLink && (
                <a
                  href={spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </motion.button>
                </a>
              )}
              
              {youtubeLink && (
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </motion.button>
                </a>
              )}
            </div>
          </div>
        )}
        
        {duration && (
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>{duration}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PodcastEpisodeCard;

