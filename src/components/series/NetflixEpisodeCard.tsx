import { motion } from "framer-motion";
import { Clock, Award, ExternalLink, Play, CheckCircle2, Loader2, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface NetflixEpisodeCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  status?: "completed" | "in-progress" | "upcoming";
  badge?: string;
  link?: string;
  icon?: ReactNode;
}

const NetflixEpisodeCard = ({ 
  title, 
  description, 
  thumbnail, 
  duration, 
  status = "completed",
  badge,
  link,
  icon
}: NetflixEpisodeCardProps) => {
  const statusColors = {
    completed: "bg-green-500/15 text-green-400 border-green-500/30",
    "in-progress": "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    upcoming: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  };

  const StatusIcon = {
    completed: CheckCircle2,
    "in-progress": Loader2,
    upcoming: CalendarClock,
  }[status];

  const statusLabel = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  }[status];

  const statusDotColor = {
    completed: "bg-green-500",
    "in-progress": "bg-yellow-500",
    upcoming: "bg-blue-500",
  }[status];

  const isInternalLink = link && !link.startsWith('http');
  
  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.01, x: 4 }}
      whileTap={{ scale: 0.99 }}
      className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 flex flex-row gap-3 sm:gap-4 h-auto"
    >
      {/* Thumbnail */}
      <div className="relative w-28 sm:w-48 aspect-square sm:aspect-auto sm:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex-shrink-0 overflow-hidden">
        {icon ? (
          <div className="w-full h-full flex items-center justify-center p-2">
            <div className="group-hover:scale-105 transition-transform duration-300">
              {icon}
            </div>
          </div>
        ) : (
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold border ${statusColors[status]}`}>
          <StatusIcon className={`w-3 h-3 ${status === "in-progress" ? "animate-spin" : ""}`} />
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileHover={{ scale: 1 }}
            className="bg-white/95 hover:bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
          >
            <Play className="w-4 h-4 ml-0.5 fill-current" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-3 sm:p-4 flex flex-col justify-center min-w-0">
        <div className="flex items-start justify-between mb-1.5 gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <h3 className="text-sm sm:text-lg font-bold text-foreground line-clamp-2 sm:line-clamp-1 leading-tight">{title}</h3>
            {badge && (
              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" aria-label={badge} />
            )}
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 sm:mb-3 flex-grow leading-snug">{description}</p>
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-muted-foreground min-w-0">
            {duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{duration}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor}`} />
              <span className="truncate">{statusLabel}</span>
            </div>
          </div>
          
          {link && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-[11px] sm:text-xs font-medium flex-shrink-0"
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
                  <Play className="w-3 h-3 fill-current" />
                  <span>Read</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-3 h-3" />
                  <span>View</span>
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
