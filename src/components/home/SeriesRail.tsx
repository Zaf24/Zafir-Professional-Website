import { motion } from "framer-motion";
import SeriesCard from "./SeriesCard";
import { Briefcase, Heart, Palette, GraduationCap, ChevronLeft, ChevronRight, Award, Shield, CheckCircle, Code, Terminal, Cpu, Zap, Mic, Headphones, Radio, Volume2 } from "lucide-react";
import { useRef } from "react";

// Custom Certification Background Component
const CertificationBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating certification badges */}
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-4 right-8 text-blue-400/40"
    >
      <Award className="w-8 h-8" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 15, 0],
        rotate: [0, -3, 0]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute top-12 left-6 text-blue-300/30"
    >
      <Shield className="w-6 h-6" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, -8, 0],
        x: [0, 5, 0]
      }}
      transition={{ 
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute bottom-8 right-12 text-blue-500/35"
    >
      <CheckCircle className="w-7 h-7" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 12, 0],
        rotate: [0, -5, 0]
      }}
      transition={{ 
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
      className="absolute bottom-16 left-8 text-blue-400/25"
    >
      <Award className="w-5 h-5" />
    </motion.div>

    {/* Decorative lines */}
    <motion.div
      animate={{ scaleX: [0, 1, 0] }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
    />
    
    <motion.div
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-300/15 to-transparent"
    />
  </div>
);

// Custom Projects Background Component
const ProjectsBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating project icons */}
    <motion.div
      animate={{ 
        y: [0, -12, 0],
        rotate: [0, 8, 0]
      }}
      transition={{ 
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-6 right-6 text-blue-400/40"
    >
      <Code className="w-8 h-8" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 18, 0],
        rotate: [0, -6, 0]
      }}
      transition={{ 
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }}
      className="absolute top-16 left-4 text-blue-300/35"
    >
      <Terminal className="w-6 h-6" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        x: [0, 8, 0]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2.5
      }}
      className="absolute bottom-12 right-8 text-blue-500/40"
    >
      <Cpu className="w-7 h-7" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 15, 0],
        rotate: [0, -8, 0]
      }}
      transition={{ 
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8
      }}
      className="absolute bottom-20 left-6 text-blue-400/30"
    >
      <Zap className="w-5 h-5" />
    </motion.div>

    {/* Decorative code-like lines */}
    <motion.div
      animate={{ scaleX: [0, 1, 0] }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
    />
    
    <motion.div
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }}
      className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"
    />

    <motion.div
      animate={{ scaleX: [0, 1, 0] }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3
      }}
      className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
    />
  </div>
);

// Custom Podcast Background Component
const PodcastBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating podcast icons */}
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 10, 0]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-4 right-6 text-purple-400/45"
    >
      <Mic className="w-8 h-8" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 20, 0],
        rotate: [0, -8, 0]
      }}
      transition={{ 
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute top-14 left-5 text-purple-300/40"
    >
      <Headphones className="w-6 h-6" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, -12, 0],
        x: [0, 6, 0]
      }}
      transition={{ 
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute bottom-10 right-10 text-purple-500/45"
    >
      <Radio className="w-7 h-7" />
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 18, 0],
        rotate: [0, -12, 0]
      }}
      transition={{ 
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
      className="absolute bottom-16 left-7 text-purple-400/35"
    >
      <Volume2 className="w-5 h-5" />
    </motion.div>

    {/* Decorative sound waves */}
    <motion.div
      animate={{ scaleX: [0, 1, 0] }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
    />
    
    <motion.div
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ 
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute top-0 bottom-0 left-2/3 w-px bg-gradient-to-b from-transparent via-purple-300/25 to-transparent"
    />

    <motion.div
      animate={{ scaleX: [0, 1, 0] }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 4
      }}
      className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent"
    />
  </div>
);

interface Series {
  id: string;
  title: string;
  description: string;
  episodeCount: number;
  backgroundImage?: string;
  customBackground?: React.ReactNode;
  link?: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: any;
  series: Series[];
}

const categoriesData: Category[] = [
  {
    id: "professional",
    title: "My Professional Journey",
    description: "Microsoft AI expertise, certifications, projects, and entrepreneurial ventures that showcase my technical leadership and innovation.",
    color: "professional",
    icon: Briefcase,
    series: [
      {
        id: "certifications",
        title: "Professional Certifications",
        description: "Microsoft AI certifications and technical credentials",
        episodeCount: 6,
        customBackground: <CertificationBackground />,
        link: "/professional-certifications",
      },
      {
        id: "projects",
        title: "Key Projects",
        description: "Transformative AI projects and technical implementations",
        episodeCount: 2,
        customBackground: <ProjectsBackground />,
        link: "/key-projects",
      },
      {
        id: "internships",
        title: "Internships & Experience",
        description: "Professional experiences and learning opportunities",
        episodeCount: 6,
      },
      {
        id: "entrepreneurship",
        title: "Entrepreneurial Ventures",
        description: "Startup initiatives and business leadership",
        episodeCount: 4,
      },
    ],
  },
  {
    id: "creative",
    title: "Creative Expression",
    description: "Thought leadership, writing, and creative projects that showcase my perspective on technology and culture.",
    color: "creative",
    icon: Palette,
    series: [
      {
        id: "thamizhum-naanum-podcast",
        title: "Thamizhum Naanum Podcast",
        description: "Tamil storytelling and cultural narratives through podcasting, exploring traditions and modern perspectives",
        episodeCount: 21,
        customBackground: <PodcastBackground />,
        link: "/thamizhum-naanum-podcast",
      },
      {
        id: "essays",
        title: "Thought Leadership",
        description: "Strategic insights on technology and innovation",
        episodeCount: 15,
      },
      {
        id: "writing",
        title: "Writing & Content",
        description: "Articles, blogs, and content creation",
        episodeCount: 10,
      },
      {
        id: "storytelling",
        title: "Tamil Storytelling",
        description: "Cultural storytelling and narrative projects",
        episodeCount: 5,
      },
    ],
  },
  {
    id: "personal",
    title: "Personal Growth",
    description: "Athletic achievements, speaking engagements, and personal development that shape my character and leadership.",
    color: "personal",
    icon: Heart,
    series: [
      {
        id: "athletics",
        title: "Athletic Journey",
        description: "National basketball achievements and sports leadership",
        episodeCount: 8,
      },
      {
        id: "speaking",
        title: "Speaking & Presentations",
        description: "Keynote talks and conference presentations",
        episodeCount: 12,
      },
      {
        id: "leadership",
        title: "Leadership Development",
        description: "Team leadership and community involvement",
        episodeCount: 6,
      },
    ],
  },
  {
    id: "academic",
    title: "Academic Excellence",
    description: "Educational achievements, research, and continuous learning that drive my expertise and innovation.",
    color: "academic",
    icon: GraduationCap,
    series: [
      {
        id: "education",
        title: "Educational Background",
        description: "Academic achievements and educational journey",
        episodeCount: 6,
      },
      {
        id: "research",
        title: "Research & Development",
        description: "Technical research and development projects",
        episodeCount: 8,
      },
      {
        id: "learning",
        title: "Continuous Learning",
        description: "Ongoing education and skill development",
        episodeCount: 12,
      },
    ],
  },
];

const SeriesRail = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollLeft = (categoryIndex: number) => {
    const scrollContainer = scrollRefs.current[categoryIndex];
    if (scrollContainer) {
      const scrollAmount = window.innerWidth < 640 ? -280 : -320;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = (categoryIndex: number) => {
    const scrollContainer = scrollRefs.current[categoryIndex];
    if (scrollContainer) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 320;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
            Explore my journey through different categories, each containing multiple series of experiences and achievements.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {categoriesData.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-3">
                <category.icon className="w-6 h-6 text-foreground" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="relative group">
                {/* Left Arrow */}
                <button
                  onClick={() => scrollLeft(categoryIndex)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 sm:p-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 touch-manipulation"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollRight(categoryIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 sm:p-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 touch-manipulation"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </button>

                <motion.div
                  ref={(el) => (scrollRefs.current[categoryIndex] = el)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, staggerChildren: 0.1 }}
                  className="flex gap-3 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide hover:scrollbar-show touch-pan-x"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  {category.series.map((series, seriesIndex) => (
                    <motion.div
                      key={series.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (seriesIndex * 0.05) }}
                      className="snap-start"
                    >
                      <SeriesCard 
                        title={series.title}
                        description={series.description}
                        color={category.color}
                        icon={category.icon}
                        episodeCount={series.episodeCount}
                        backgroundImage={series.backgroundImage}
                        customBackground={series.customBackground}
                        link={series.link}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="absolute left-0 top-0 bottom-6 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-6 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeriesRail;
