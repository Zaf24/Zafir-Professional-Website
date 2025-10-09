import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PowerAppsAppliedSkillsArticle = () => {
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
                    src="/applied-skill.svg"
                    alt="Applied Skills: Build and Manage Model Driven Apps with Power Apps and Dataverse"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
              
              {/* Article Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                    Applied Skills
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Build and Manage Model Driven Apps with Power Apps and Dataverse
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  Practical certification covering the development of model-driven applications using Power Apps and Dataverse for business process automation and data management.
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>Completed 2025</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-purple-500" />
                    <a 
                      href="https://learn.microsoft.com/en-us/certifications/applied-skills/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Applied Skills Program
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
                The Applied Skills: Build and Manage Model Driven Apps with Power Apps and Dataverse certification validates practical ability to create business applications using Microsoft's low-code platform. This assessment covers data modeling, app development, and business process automation.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Exploring Low-Code Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coming from traditional development, the Power Platform represented a paradigm shift toward low-code solutions. The Applied Skills assessment challenged me to think differently about application development and business process automation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The hands-on nature meant I had to quickly adapt to the Power Apps interface, understand Dataverse data modeling, and implement business logic through configuration rather than code.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🏗️ Building Model-Driven Applications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The assessment required creating complete business applications with proper data relationships, security roles, and business processes. I had to design entity models, configure forms and views, and implement automation workflows.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The time constraint added pressure to work efficiently while ensuring the applications would actually meet business requirements and be maintainable by citizen developers.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✨ Key Achievements</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      • Designed a comprehensive Dataverse data model with proper relationships 📊
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Built model-driven apps with custom forms, views, and dashboards 📱
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Implemented business process flows and automation workflows ⚡
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Configured security roles and data access policies 🔐
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                      The low-code approach proved incredibly powerful for rapid business application development! 🏆
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Gained */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">🎯 Key Skills Demonstrated</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🗄️ Dataverse Design</h3>
                  <p className="text-sm text-muted-foreground">Entity modeling, relationships, and data governance</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">📱 Model-Driven Apps</h3>
                  <p className="text-sm text-muted-foreground">Form design, view configuration, and user experience</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">⚡ Business Process Flows</h3>
                  <p className="text-sm text-muted-foreground">Workflow automation and process optimization</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🔐 Security & Governance</h3>
                  <p className="text-sm text-muted-foreground">Role-based access control and data security</p>
                </div>
              </div>
            </div>

            {/* Practical Applications */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">💼 Practical Applications</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Applied Skills certification has enabled me to rapidly prototype and deploy business applications for clients, from customer relationship management systems to inventory tracking solutions. The low-code approach allows for faster delivery while maintaining enterprise-grade functionality. 🚀
              </p>
            </div>

            {/* Recommended Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Free Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Power Platform Learn Modules</h3>
                  <p className="text-muted-foreground mb-4">
                    Focus on Dataverse fundamentals, model-driven apps, and Power Automate workflows to build a solid foundation for the assessment.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-us/power-platform/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📖 Power Platform Documentation
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Study Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    Practice building small model-driven apps using the Power Platform trial environment. Focus on data modeling and business process design rather than just UI configuration.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-medium">
                      💡 Pro Tip: Think like a business analyst - understand the requirements before building the solution!
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

export default PowerAppsAppliedSkillsArticle;
