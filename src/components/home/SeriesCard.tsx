import { motion } from "framer-motion";
import { LucideIcon, Clock, ArrowRight } from "lucide-react";
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
      whileHover={{ scale: link ? 1.06 : 1.02, y: link ? -10 : -4 }}
      whileTap={{ scale: 0.97 }}
      className={`relative group ${link ? 'cursor-pointer' : 'cursor-default'} rounded-xl overflow-hidden bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border border-border transition-all duration-300 hover:shadow-2xl w-[240px] sm:w-[320px] h-[200px] sm:h-[260px] flex-shrink-0`}
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

      {/* Coming Soon Badge - Only shown when there's no link */}
      {!link && (
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-background/95 backdrop-blur-md border border-yellow-500/30 rounded-lg px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-semibold text-foreground">Coming Soon</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${iconColorClasses[color as keyof typeof iconColorClasses]}`} strokeWidth={2} />
          <span className="text-[10px] sm:text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap mt-0.5">
            {episodeCount} episodes
          </span>
        </div>

        <h3 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2 text-foreground leading-snug line-clamp-2 tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3 flex-grow leading-snug">{description}</p>

        {link ? (
          <div className="mt-2.5 sm:mt-3 flex items-center text-xs sm:text-sm font-semibold text-foreground sm:opacity-70 sm:group-hover:opacity-100 sm:group-hover:translate-x-1 transition-all duration-300">
            <span>View Series</span>
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </div>
        ) : (
          <div className="mt-2.5 sm:mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>Building content</span>
          </div>
        )}
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
