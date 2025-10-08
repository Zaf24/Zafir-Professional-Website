import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Code, Mic, Trophy, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technologist",
      description: "Microsoft AI specialist, cloud innovator, and full-stack developer passionate about cutting-edge solutions.",
      color: "career",
    },
    {
      icon: Mic,
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
      icon: Heart,
      title: "Thinker",
      description: "Philosophy enthusiast exploring Tamil culture, technology ethics, and the human experience.",
      color: "essays",
    },
  ];

  const colorClasses = {
    speaking: "text-speaking",
    sports: "text-sports",
    essays: "text-essays",
    career: "text-career",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet
              <span className="block bg-gradient-to-r from-speaking via-career to-essays bg-clip-text text-transparent">
                The Real Zafir
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A multifaceted professional navigating the intersection of technology, culture, and human connection—always learning, always growing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 sm:p-8"
                >
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 ${colorClasses[item.color as keyof typeof colorClasses]}`} />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-card to-accent/20 border border-border rounded-xl p-8 sm:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
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
