import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SeriesCardProps {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  episodeCount: number;
}

const SeriesCard = ({ title, description, color, icon: Icon, episodeCount }: SeriesCardProps) => {
  const colorClasses = {
    speaking: "from-speaking/20 to-speaking/5 hover:shadow-speaking/50",
    sports: "from-sports/20 to-sports/5 hover:shadow-sports/50",
    essays: "from-essays/20 to-essays/5 hover:shadow-essays/50",
    career: "from-career/20 to-career/5 hover:shadow-career/50",
  };

  const iconColorClasses = {
    speaking: "text-speaking",
    sports: "text-sports",
    essays: "text-essays",
    career: "text-career",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border border-border transition-all duration-300 hover:shadow-2xl min-w-[280px] sm:min-w-[320px]`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${iconColorClasses[color as keyof typeof iconColorClasses]}`} />
          <span className="text-xs sm:text-sm text-muted-foreground bg-card px-2 sm:px-3 py-1 rounded-full">
            {episodeCount} episodes
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">{description}</p>

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

      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default SeriesCard;
