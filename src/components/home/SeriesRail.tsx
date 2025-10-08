import { motion } from "framer-motion";
import SeriesCard from "./SeriesCard";
import { Mic, Trophy, BookOpen, Briefcase } from "lucide-react";

const seriesData = [
  {
    id: "speaking",
    title: "Speaking",
    description: "Keynote presentations, conference talks, and thought leadership that drive innovation and inspire audiences.",
    color: "speaking",
    icon: Mic,
    episodeCount: 12,
  },
  {
    id: "sports",
    title: "Athletics",
    description: "National-level basketball achievements, leadership skills, and the discipline that drives professional excellence.",
    color: "sports",
    icon: Trophy,
    episodeCount: 8,
  },
  {
    id: "essays",
    title: "Thought Leadership",
    description: "Strategic insights on technology, culture, and innovation that shape the future of work.",
    color: "essays",
    icon: BookOpen,
    episodeCount: 15,
  },
  {
    id: "career",
    title: "Professional",
    description: "Microsoft AI expertise, entrepreneurial ventures, and transformative projects that deliver results.",
    color: "career",
    icon: Briefcase,
    episodeCount: 24,
  },
];

const SeriesRail = () => {
  return (
    <section id="my-journey" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">My Journey</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Each series represents a major chapter of my professional journey. Click to explore my achievements and dive deeper into my expertise.
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
