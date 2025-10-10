import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AzureAIFundamentalsArticle = () => {
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <img
                            src="./microsoft-certified-fundamentals.svg"
                    alt="Microsoft Azure AI Fundamentals"
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
                  Microsoft Azure AI Fundamentals
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  My introduction to the fascinating world of artificial intelligence on Azure. This certification sparked my passion for AI and laid the groundwork for all my future AI specializations.
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    <span>Completed 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-cyan-500" />
                    <a 
                      href="https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
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
                The Microsoft Azure AI Fundamentals certification provides foundational knowledge of machine learning and artificial intelligence concepts on Azure. This certification covers AI workloads, machine learning principles, computer vision, natural language processing, and conversational AI, making it perfect for anyone starting their AI journey.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Entering the AI World</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The AI-900 was my first deep dive into artificial intelligence. Coming after completing AZ-900, I was eager to understand how AI services work on Azure. The certification introduced me to concepts that once seemed like science fiction - machine learning, computer vision, and natural language processing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    What struck me most was how accessible Azure makes AI. Services that would require months of development and deep expertise are available as APIs, ready to integrate into applications. This democratization of AI technology was eye-opening.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🧪 Experimenting with AI Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The hands-on labs were transformative. I built image classification models, created text analysis solutions, and experimented with conversational AI bots. Each lab showed me different facets of what AI can achieve - from recognizing objects in images to understanding sentiment in text.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Working with Azure Cognitive Services and Azure Machine Learning gave me practical experience in using pre-built AI models and training custom ones. The ability to test different approaches and see immediate results made learning both fun and effective.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✨ Key Breakthroughs</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      • Understanding machine learning concepts and model training 🤖
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Building computer vision solutions for image analysis 👁️
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Creating natural language processing applications 💬
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Implementing conversational AI with bots 🤝
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                      This certification ignited my passion for AI and set me on the path to specialization! 🏆
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
                  <h3 className="text-lg font-semibold text-foreground">🤖 Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">Understanding ML concepts, model training, and Azure ML services</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">👁️ Computer Vision</h3>
                  <p className="text-sm text-muted-foreground">Image analysis, object detection, and facial recognition</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">💬 Natural Language Processing</h3>
                  <p className="text-sm text-muted-foreground">Text analysis, sentiment detection, and language understanding</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🤝 Conversational AI</h3>
                  <p className="text-sm text-muted-foreground">Bot development and conversational interfaces</p>
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Free Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Microsoft Learn Course</h3>
                  <p className="text-muted-foreground mb-4">
                    The official AI-900 course covers fundamental AI concepts, Azure AI services, and hands-on labs. Perfect for beginners looking to understand AI capabilities and how to implement them on Azure.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-us/training/courses/ai-900t00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📖 Access AI-900 Course
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Study Methods</h3>
                  <p className="text-muted-foreground mb-4">
                    Focus on understanding the different types of AI workloads and when to use each Azure AI service. The hands-on labs are crucial - make sure to complete them all and experiment beyond the instructions.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-medium">
                      💡 Pro Tip: This certification is the perfect stepping stone to the AI-102 Azure AI Engineer certification!
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

export default AzureAIFundamentalsArticle;

