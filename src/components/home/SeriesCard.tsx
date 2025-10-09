import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SeriesCardProps {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  episodeCount: number;
  backgroundImage?: string;
  customBackground?: React.ReactNode;
  link?: string;
}

const SeriesCard = ({ title, description, color, icon: Icon, episodeCount, backgroundImage, customBackground, link }: SeriesCardProps) => {
  const colorClasses = {
    professional: "from-blue-500/20 to-blue-500/5 hover:shadow-blue-500/50",
    personal: "from-green-500/20 to-green-500/5 hover:shadow-green-500/50",
    creative: "from-purple-500/20 to-purple-500/5 hover:shadow-purple-500/50",
    academic: "from-orange-500/20 to-orange-500/5 hover:shadow-orange-500/50",
  };

  const iconColorClasses = {
    professional: "text-blue-500",
    personal: "text-green-500",
    creative: "text-purple-500",
    academic: "text-orange-500",
  };

  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.1, y: -15 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border border-border transition-all duration-300 hover:shadow-2xl w-[280px] sm:w-[320px] h-[200px] sm:h-[240px] flex-shrink-0`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Custom Background Graphics */}
      {customBackground && (
        <div className="absolute inset-0 opacity-30">
          {customBackground}
        </div>
      )}

      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${iconColorClasses[color as keyof typeof iconColorClasses]}`} />
          <span className="text-xs sm:text-sm text-muted-foreground bg-card/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
            {episodeCount} episodes
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 flex-grow">{description}</p>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="mt-4 sm:mt-6 flex items-center text-sm sm:text-base font-semibold text-foreground"
        >
          <span>View Series</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-2"
          >
            →
          </motion.span>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  return link ? (
    <Link to={link}>
      {CardContent}
    </Link>
  ) : CardContent;
};

export default SeriesCard;
