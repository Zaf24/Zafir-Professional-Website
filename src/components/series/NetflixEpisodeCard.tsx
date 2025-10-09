import { motion } from "framer-motion";
import { Clock, Award, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface NetflixEpisodeCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  status?: "completed" | "in-progress" | "upcoming";
  badge?: string;
  link?: string;
}

const NetflixEpisodeCard = ({ 
  title, 
  description, 
  thumbnail, 
  duration = "45 min", 
  status = "completed",
  badge,
  link 
}: NetflixEpisodeCardProps) => {
  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  const isInternalLink = link && !link.startsWith('http');
  
  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.02, x: 8 }}
      className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 flex gap-4 h-32"
    >
      {/* Thumbnail */}
      <div className="relative w-48 h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex-shrink-0 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
          {status === "completed" && "✓"}
          {status === "in-progress" && "⏳"}
          {status === "upcoming" && "📅"}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1 }}
            className="bg-white/90 hover:bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Play className="w-4 h-4 ml-0.5" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 flex flex-col justify-center min-w-0">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-lg font-bold text-foreground truncate">{title}</h3>
            {badge && (
              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {status === "completed" && "Completed"}
              {status === "in-progress" && "In Progress"}
              {status === "upcoming" && "Upcoming"}
            </div>
          </div>
          
          {link && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                if (isInternalLink) {
                  window.location.href = link;
                } else {
                  window.open(link, '_blank');
                }
              }}
            >
              {isInternalLink ? (
                <>
                  <Play className="w-3 h-3" />
                  Read Article
                </>
              ) : (
                <>
                  <ExternalLink className="w-3 h-3" />
                  View
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return isInternalLink && link ? (
    <Link to={link}>
      {CardContent}
    </Link>
  ) : CardContent;
};

export default NetflixEpisodeCard;
