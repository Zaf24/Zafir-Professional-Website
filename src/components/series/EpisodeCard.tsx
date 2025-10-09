import { motion } from "framer-motion";
import { Clock, Award, ExternalLink } from "lucide-react";

interface EpisodeCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  status?: "completed" | "in-progress" | "upcoming";
  badge?: string;
  link?: string;
}

const EpisodeCard = ({ 
  title, 
  description, 
  thumbnail, 
  duration = "45 min", 
  status = "completed",
  badge,
  link 
}: EpisodeCardProps) => {
  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
          {status === "completed" && "✓ Completed"}
          {status === "in-progress" && "⏳ In Progress"}
          {status === "upcoming" && "📅 Upcoming"}
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Details
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground line-clamp-1">{title}</h3>
          {badge && (
            <div className="flex-shrink-0 ml-2">
              <Award className="w-4 h-4 text-yellow-500" />
            </div>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        
        {link && (
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
              {link}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EpisodeCard;
