import { motion } from "framer-motion";
import { ArrowLeft, Award, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NetflixEpisodeCard from "@/components/series/NetflixEpisodeCard";

const ProfessionalCertifications = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const episodes = [
    {
      id: "azure-ai-engineer",
      title: "Microsoft Azure AI Engineer",
      description: "Comprehensive certification covering AI solutions on Azure platform, including machine learning models, cognitive services, and AI application development.",
      thumbnail: "./microsoft-certified-associate.svg",
      status: "completed" as const,
      badge: "Microsoft Certified",
      link: "/azure-ai-engineer",
    },
    {
      id: "azure-fundamentals",
      title: "Microsoft Azure Fundamentals",
      description: "Foundation-level certification covering core Azure services, cloud concepts, security, privacy, compliance, and trust.",
      thumbnail: "./microsoft-certified-fundamentals.svg",
      status: "completed" as const,
      badge: "Microsoft Certified",
      link: "/azure-fundamentals",
    },
    {
      id: "azure-ai-fundamentals",
      title: "Microsoft Azure AI Fundamentals",
      description: "Entry-level certification covering AI workloads and considerations for Azure AI services, including machine learning and cognitive services.",
      thumbnail: "./microsoft-certified-fundamentals.svg",
      status: "completed" as const,
      badge: "Microsoft Certified",
      link: "/azure-ai-fundamentals",
    },
    {
      id: "power-platforms-fundamentals",
      title: "MS Power Platforms Fundamentals",
      description: "Foundation certification covering Power Platform core components including Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
      thumbnail: "./microsoft-certified-fundamentals.svg",
      status: "completed" as const,
      badge: "Microsoft Certified",
      link: "/power-platform-fundamentals",
    },
    {
      id: "nlp-applied-skills",
      title: "Applied Skills: Build Natural Language Processing Solution",
      description: "Hands-on certification demonstrating ability to build NLP solutions using Azure AI services for text analysis, language understanding, and conversational AI.",
      thumbnail: "./applied-skill.svg",
      status: "completed" as const,
      badge: "Applied Skills",
      link: "/nlp-applied-skills",
    },
    {
      id: "powerapps-applied-skills",
      title: "Applied Skills: Build and Manage Model Driven Apps with Power Apps and Dataverse",
      description: "Practical certification covering the development of model-driven applications using Power Apps and Dataverse for business process automation.",
      thumbnail: "./applied-skill.svg",
      status: "completed" as const,
      badge: "Applied Skills",
      link: "/powerapps-applied-skills",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Series Header */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-border">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Professional Certifications</h1>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
                  Microsoft AI certifications and technical credentials that validate expertise in cutting-edge technologies and professional development.
                </p>
                
                {/* Series Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-muted-foreground">Started 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">{episodes.length} Certifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-muted-foreground">Microsoft Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold">Episodes</h2>
            <div className="text-sm text-muted-foreground">
              {episodes.length} certification{episodes.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Netflix-style Episodes List */}
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <NetflixEpisodeCard {...episode} />
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">More Certifications Coming Soon</h3>
              <p className="text-muted-foreground">
                Stay tuned for additional Microsoft AI and cloud certifications as I continue my professional development journey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalCertifications;
