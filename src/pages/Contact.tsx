import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Mail, Linkedin, Github, Instagram, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "zafirmohamed07@outlook.com",
      href: "mailto:zafirmohamed07@outlook.com",
      color: "speaking",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mohamed Zafir",
      href: "https://www.linkedin.com/in/mohamed-zafir-01ab32222/",
      color: "career",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Zaf24",
      href: "https://github.com/Zaf24",
      color: "essays",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@zafiristic__",
      href: "https://instagram.com/zafiristic__",
      color: "sports",
    },
  ];

  const colorClasses = {
    speaking: "border-speaking/30 hover:border-speaking/70 hover:shadow-speaking/20",
    sports: "border-sports/30 hover:border-sports/70 hover:shadow-sports/20",
    essays: "border-essays/30 hover:border-essays/70 hover:shadow-essays/20",
    career: "border-career/30 hover:border-career/70 hover:shadow-career/20",
  };

  const iconBgClasses = {
    speaking: "bg-speaking/15 text-speaking",
    sports: "bg-sports/15 text-sports",
    essays: "bg-essays/15 text-essays",
    career: "bg-career/15 text-career",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-speaking/15 ring-1 ring-speaking/30 mb-5 sm:mb-6"
            >
              <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-speaking" strokeWidth={2.2} />
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">
              Let's Connect
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're a recruiter, collaborator, or just someone who wants to chat —
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-10 sm:mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`${colorClasses[link.color as keyof typeof colorClasses]} bg-card border-2 rounded-2xl p-5 sm:p-6 transition-all duration-300 block hover:shadow-xl`}
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl mb-3 sm:mb-4 ${iconBgClasses[link.color as keyof typeof iconBgClasses]}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 text-foreground">{link.label}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-all sm:break-normal">{link.value}</p>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-6 sm:p-12 text-center"
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-tight">Quick Note</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-xl mx-auto leading-relaxed">
              I typically respond within 24–48 hours. For urgent matters, LinkedIn is usually the fastest way to reach me.
            </p>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-background/60 px-3 py-1.5 rounded-full border border-border">
              <span className="relative inline-flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
              </span>
              <span>Usually active</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
