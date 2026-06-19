import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Sparkles, Mic2, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Technologist",
      description: "Microsoft AI specialist, cloud innovator, and full-stack developer passionate about cutting-edge solutions.",
      color: "career",
    },
    {
      icon: Mic2,
      title: "Communicator",
      description: "Public speaker, podcast host, and Tamil storyteller connecting cultures through words.",
      color: "speaking",
    },
    {
      icon: Trophy,
      title: "Athlete",
      description: "National-level basketball player who learned teamwork, discipline, and resilience on the court.",
      color: "sports",
    },
    {
      icon: Lightbulb,
      title: "Thinker",
      description: "Philosophy enthusiast exploring Tamil culture, technology ethics, and the human experience.",
      color: "essays",
    },
  ];

  const colorClasses = {
    speaking: "text-speaking bg-speaking/10 ring-1 ring-speaking/20",
    sports: "text-sports bg-sports/10 ring-1 ring-sports/20",
    essays: "text-essays bg-essays/10 ring-1 ring-essays/20",
    career: "text-career bg-career/10 ring-1 ring-career/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">
              Meet <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">The Real Zafir</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A multifaceted professional navigating the intersection of technology, culture, and human connection — always learning, always growing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-card border border-border rounded-2xl p-5 sm:p-8 transition-shadow hover:shadow-xl"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-card to-accent/20 border border-border rounded-2xl p-6 sm:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">My Story</h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                From the basketball court to the boardroom, from Tamil storytelling to cutting-edge AI development,
                my journey has been anything but conventional.
              </p>
              <p>
                At Microsoft, I've worked on transformative AI solutions while maintaining deep roots in my cultural heritage.
                I tutor mathematics and Tamil, bridging generational and cultural gaps through education.
              </p>
              <p>
                My entrepreneurial ventures—Cloudslize, ZAFragrance, and Guru—reflect my belief that technology should
                serve humanity, not replace it. Through speaking engagements and essays, I advocate for ethical innovation
                and cultural preservation in our rapidly digitizing world.
              </p>
              <p className="text-foreground font-semibold">
                This catalogue is my way of sharing these experiences with you—recruiter, collaborator, or curious mind.
                Welcome to my world.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
