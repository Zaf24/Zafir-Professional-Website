import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PowerPlatformFundamentalsArticle = () => {
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <img
                            src="./microsoft-certified-fundamentals.svg"
                    alt="Microsoft Power Platform Fundamentals"
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
                  Microsoft Power Platform Fundamentals
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  Discovering the power of low-code/no-code solutions and how they can transform business processes. This certification opened my eyes to the possibilities of citizen development and rapid application deployment.
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Completed 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-purple-500" />
                    <a 
                      href="https://learn.microsoft.com/en-us/certifications/power-platform-fundamentals/"
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
                The Microsoft Power Platform Fundamentals certification validates foundational knowledge of the business value and capabilities of Microsoft Power Platform. This certification covers Power Apps, Power Automate, Power BI, Power Pages, and how to connect data with Microsoft Dataverse, enabling rapid business solution development.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Discovering Low-Code Power</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The PL-900 certification introduced me to the world of low-code/no-code development. Coming from a traditional development background, I was initially skeptical about how powerful these tools could be. However, I quickly realized that Power Platform democratizes app development and allows for rapid prototyping and deployment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Learning about Power Apps, Power Automate, and Power BI together showed me how these tools integrate seamlessly to create comprehensive business solutions. The ability to build apps visually while still having access to formulas and logic was a game-changer.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🧪 Building Real Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The hands-on labs were particularly valuable. I created canvas apps, built automated workflows, designed Power BI dashboards, and explored Power Pages for creating business websites. Each component of the Power Platform complemented the others perfectly.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Working with Dataverse to manage data across multiple apps showed me the power of a unified data platform. The ability to create relationships between tables and enforce business rules at the data level was incredibly powerful.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✨ Key Breakthroughs</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      • Understanding the difference between canvas and model-driven apps 📱
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Creating automated workflows with Power Automate ⚡
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Building interactive dashboards with Power BI 📊
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Leveraging AI Builder for intelligent automation 🤖
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                      These tools enable anyone to be a maker and solve business problems! 🏆
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
                  <h3 className="text-lg font-semibold text-foreground">📱 Power Apps</h3>
                  <p className="text-sm text-muted-foreground">Building canvas and model-driven apps for business solutions</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">⚡ Power Automate</h3>
                  <p className="text-sm text-muted-foreground">Creating automated workflows and business process automation</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">📊 Power BI</h3>
                  <p className="text-sm text-muted-foreground">Designing interactive dashboards and data visualizations</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🗄️ Dataverse</h3>
                  <p className="text-sm text-muted-foreground">Managing data and creating relationships across applications</p>
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Free Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Microsoft Learn Course</h3>
                  <p className="text-muted-foreground mb-4">
                    The official PL-900 course covers all aspects of Microsoft Power Platform, including Power Apps, Power Automate, Power BI, and Power Pages. Perfect for understanding the business value and capabilities of the platform.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-us/training/courses/pl-900t00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📖 Access PL-900 Course
                  </a>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📺 Supplementary Videos</h3>
                  <p className="text-muted-foreground mb-4">
                    Video tutorials provide visual walkthroughs of building apps, creating flows, and designing dashboards, making complex concepts easier to understand.
                  </p>
                  <a 
                    href="https://youtu.be/ZTPcRWK0ytE?si=7d5xAzQTj3SXPqAP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    🎥 Watch Video Tutorials
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Study Methods</h3>
                  <p className="text-muted-foreground mb-4">
                    Use the Microsoft Learn modules as your primary resource and supplement with videos for visual demonstrations. The best way to learn Power Platform is by building actual solutions hands-on.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-medium">
                      💡 Pro Tip: Try building small apps and automations for your own use cases - practical experience is key!
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

export default PowerPlatformFundamentalsArticle;

