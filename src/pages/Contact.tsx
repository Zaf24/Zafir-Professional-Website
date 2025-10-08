import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Mail, Linkedin, Github, Instagram, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "zafir.main@outlook.com",
      href: "mailto:zafir.main@outlook.com",
      color: "speaking",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/zafir-main",
      href: "https://linkedin.com/in/zafir-main",
      color: "career",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/zafirmain",
      href: "https://github.com/zafirmain",
      color: "essays",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@zafirmain",
      href: "https://instagram.com/zafirmain",
      color: "sports",
    },
  ];

  const colorClasses = {
    speaking: "bg-speaking/10 border-speaking/30 hover:border-speaking text-speaking",
    sports: "bg-sports/10 border-sports/30 hover:border-sports text-sports",
    essays: "bg-essays/10 border-essays/30 hover:border-essays text-essays",
    career: "bg-career/10 border-career/30 hover:border-career text-career",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <MessageSquare className="w-16 h-16 sm:w-20 sm:h-20 text-speaking" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a recruiter, collaborator, or just someone who wants to chat—
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colorClasses[link.color as keyof typeof colorClasses]} border-2 rounded-xl p-6 transition-all duration-300 block`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <h3 className="font-bold text-lg mb-1">{link.label}</h3>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quick Note</h2>
            <p className="text-muted-foreground mb-6">
              I typically respond within 24-48 hours. For urgent matters, LinkedIn is usually the fastest way to reach me.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Usually active</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
