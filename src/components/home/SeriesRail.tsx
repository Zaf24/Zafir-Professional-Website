import { motion } from "framer-motion";
import SeriesCard from "./SeriesCard";
import { Mic, Trophy, BookOpen, Briefcase } from "lucide-react";

const seriesData = [
  {
    id: "speaking",
    title: "Speaking",
    description: "Talks, podcasts, hosting events, and Tamil storytelling that inspire and engage.",
    color: "speaking",
    icon: Mic,
    episodeCount: 12,
  },
  {
    id: "sports",
    title: "Sports",
    description: "National-level basketball journey, teamwork lessons, and the discipline of athletics.",
    color: "sports",
    icon: Trophy,
    episodeCount: 8,
  },
  {
    id: "essays",
    title: "Essays",
    description: "Philosophical reflections on Tamil culture, technology, and thought leadership.",
    color: "essays",
    icon: BookOpen,
    episodeCount: 15,
  },
  {
    id: "career",
    title: "Career",
    description: "Microsoft, tutoring, projects, certifications, and entrepreneurship—all in one place.",
    color: "career",
    icon: Briefcase,
    episodeCount: 24,
  },
];

const SeriesRail = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">My Story</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Each series represents a major chapter of my journey. Click to explore episodes and dive deeper into my world.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {seriesData.map((series, index) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="snap-start"
              >
                <SeriesCard {...series} />
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute left-0 top-0 bottom-6 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SeriesRail;
