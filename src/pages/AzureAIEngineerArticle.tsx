import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AzureAIEngineerArticle = () => {
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
                        src="./microsoft-certified-associate.svg"
                    alt="Microsoft Azure AI Engineer"
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
                  Microsoft Azure AI Engineer
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  My first associate level certification. Was an exciting learning journey discovering Natural language processing solutions, Cognitive services and countless other AI services in the Azure ecosystem during  the preparations for this exam.
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
                      href="https://learn.microsoft.com/en-us/certifications/azure-ai-engineer-associate/"
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
                The Microsoft Azure AI Engineer Associate certification validates expertise in designing and implementing AI solutions on the Azure platform. This comprehensive certification covers machine learning models, cognitive services, and AI application development.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Starting from scratch (again)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When I first looked at the AI-102: Designing and Implementing Azure AI Solutions exam, I felt both excitement and anxiety. I had already earned AI-900, but coming from a non-technical background as a fresh graduate meant I knew there would be a steep climb ahead.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Unlike peers who had formal CS courses, I had to build foundations as I went. Concepts like REST APIs, model training, prompt engineering, or computer vision weren't just theoretical — they had to be internalised by doing. Early on, I often felt lost browsing documentation or trying to map Microsoft Learn modules to real code.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🧪 Labs as my lifeline</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Microsoft Learn's labs were a revelation. They forced me to break out of passive reading and into doing: building small generative AI apps, testing document intelligence, crafting vision models, or connecting language services. These hands-on modules became my playground.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    At times, I stepped outside the lab instructions—experimenting with tweaks, applying ideas that popped in my head, or combining features in new ways. That creative detour was where real learning happened.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✨ Moments that mattered</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      • When a custom entity recognition service finally began returning accurate classifications 🎯
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • When a deployed agent integrated cleanly into a workflow, matching my expectations 🔗
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • When I verified confidence scores, error margins, and tuning parameters to improve response quality 📊
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                      Those felt like small victories—but they added up. 🏆
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
                  <h3 className="text-lg font-semibold text-foreground">🤖 Azure AI Services</h3>
                  <p className="text-sm text-muted-foreground">Cognitive Services, Bot Framework, and AI-powered applications</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🧠 Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">Azure ML, model training, and deployment pipelines</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🔗 AI Integration</h3>
                  <p className="text-sm text-muted-foreground">API integration, data processing, and solution architecture</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">📊 Monitoring & Optimization</h3>
                  <p className="text-sm text-muted-foreground">Performance monitoring, cost optimization, and best practices</p>
                </div>
              </div>
            </div>

            {/* Practical Applications */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">💼 Practical Applications</h2>
              <p className="text-muted-foreground leading-relaxed">
                This certification has enabled the implementation of AI solutions across various projects, from intelligent chatbots to predictive analytics systems. The knowledge gained continues to drive innovation in AI-powered applications. 🚀
              </p>
            </div>

            {/* Recommended Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Free Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Microsoft Learn Course</h3>
                  <p className="text-muted-foreground mb-4">
                    The official Microsoft Learn course for AI-102: Develop AI solutions in Azure provides comprehensive coverage of all exam topics including generative AI apps, AI agents, computer vision, and information extraction.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-us/training/courses/ai-102t00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📖 Access MS Learn Course
                  </a>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📺 Supplementary Videos</h3>
                  <p className="text-muted-foreground mb-4">
                    Video tutorials provide visual explanations for complex concepts and practical demonstrations that complement the written materials.
                  </p>
                  <a 
                    href="https://youtu.be/scJ4mobwjBQ?si=aMNL8BpCa8PyMjgP"
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
                    Use the Microsoft Learn material as your primary resource for reading through concepts, and supplement with videos for harder topics that need visual explanation.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-medium">
                      💡 Pro Tip: Reach out to me for detailed study methods and personalized tips!
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

export default AzureAIEngineerArticle;
