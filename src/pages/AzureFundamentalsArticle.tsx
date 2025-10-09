import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AzureFundamentalsArticle = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/professional-certifications">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Certifications
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Article Header */}
            <div className="flex items-start gap-8">
              {/* Thumbnail */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <img
                    src="/microsoft-certified-fundamentals.svg"
                    alt="Microsoft Azure Fundamentals"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
              
              {/* Article Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-400 bg-yellow-500/20 px-3 py-1 rounded-full">
                    Microsoft Certified
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Microsoft Azure Fundamentals
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  My first ever professional certification. The learning journey and discovery of new concepts is still fresh in my mind. Perfect starting point for anyone beginning their Azure journey.
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>Completed 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-purple-500" />
                    <a 
                      href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Official Certification
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Article Body */}
          <article className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Microsoft Azure Fundamentals certification validates foundational knowledge of cloud concepts and Azure services. This beginner-friendly certification covers core Azure services, security, compliance, and governance features, making it the perfect starting point for anyone beginning their cloud journey.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Starting My Cloud Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The AZ-900 was my first foray into cloud computing and Microsoft Azure. Coming from a non-technical background, I was both excited and nervous about diving into cloud concepts. The certification provided the perfect foundation to understand what cloud computing really means and how Azure fits into the bigger picture.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The exam covered everything from basic cloud concepts like IaaS, PaaS, and SaaS to specific Azure services and their use cases. It felt like learning a new language - once I understood the fundamentals, everything else started making sense.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🧪 Hands-On Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Microsoft Learn's interactive modules were incredibly helpful. I could explore the Azure portal, create virtual machines, set up storage accounts, and experiment with different services in a safe environment. The hands-on labs made abstract concepts concrete and memorable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The free tier access allowed me to try different services without worrying about costs, which was perfect for building confidence and understanding how Azure services work together in real scenarios.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✨ Key Breakthroughs</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      • Understanding the difference between cloud models (public, private, hybrid) ☁️
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Grasping Azure's shared responsibility model for security 🔐
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Learning about cost management and pricing models 💰
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Exploring Azure's global infrastructure and regions 🌍
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                      This foundation made all my subsequent Azure learning much easier! 🏆
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Gained */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">🎯 Key Skills Acquired</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">☁️ Cloud Concepts</h3>
                  <p className="text-sm text-muted-foreground">Understanding cloud computing models, benefits, and service types</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🔧 Core Azure Services</h3>
                  <p className="text-sm text-muted-foreground">Virtual machines, storage, networking, and compute services</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🔐 Security & Compliance</h3>
                  <p className="text-sm text-muted-foreground">Azure security features, identity management, and governance</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">💰 Pricing & Support</h3>
                  <p className="text-sm text-muted-foreground">Azure pricing models, cost management, and support options</p>
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Free Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Microsoft Learn Course</h3>
                  <p className="text-muted-foreground mb-4">
                    The official AZ-900 course provides comprehensive coverage of cloud concepts, core Azure services, and management features. Perfect for beginners with hands-on labs included.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-us/training/courses/az-900t00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📖 Access AZ-900 Course
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Study Methods</h3>
                  <p className="text-muted-foreground mb-4">
                    Start with the Microsoft Learn modules to build foundational knowledge, then use the Azure free tier to get hands-on experience. Focus on understanding concepts rather than memorizing facts.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-medium">
                      💡 Pro Tip: Don't rush through the fundamentals - this knowledge will help you in every other Azure certification!
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                      💬 Contact Me for Study Tips
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default AzureFundamentalsArticle;
