import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NLPAppliedSkillsArticle = () => {
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
                    src="./applied-skill.svg"
                    alt="Applied Skills: Build Natural Language Processing Solution"
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
                  Build Natural Language Processing Solution
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  Hands-on certification demonstrating ability to build NLP solutions using Azure AI services for text analysis, language understanding, and conversational AI applications.
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
                The Applied Skills: Build Natural Language Processing Solution certification validates practical ability to create NLP solutions using Azure AI services. This hands-on assessment covers text analysis, language understanding, and conversational AI implementation.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">💭 Starting the Applied Skills Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Applied Skills format was refreshingly different from traditional exams. Instead of multiple-choice questions, I was given real-world scenarios and had to build actual NLP solutions using Azure services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Coming from the Azure AI Engineer certification, I had the theoretical knowledge, but this assessment pushed me to apply it in practical scenarios that mirrored real client projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🧪 Hands-On Lab Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The lab environment provided access to Azure AI services including Text Analytics, Language Understanding (LUIS), and Azure Bot Service. I had to configure services, train models, and integrate them into working applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The time pressure added an element of real-world urgency, forcing me to work efficiently while ensuring quality implementations that would actually work in production environments.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✨ Key Achievements</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      • Successfully built a sentiment analysis pipeline processing multiple languages 🌍
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Implemented a conversational AI bot with natural language understanding 🤖
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      • Created text extraction and entity recognition workflows 📄
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                      The practical nature made every solution feel like a real project deliverable! 🏆
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
                  <h3 className="text-lg font-semibold text-foreground">🗣️ Text Analytics</h3>
                  <p className="text-sm text-muted-foreground">Sentiment analysis, key phrase extraction, and language detection</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🧠 Language Understanding</h3>
                  <p className="text-sm text-muted-foreground">Intent recognition, entity extraction, and conversational AI</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🔗 Service Integration</h3>
                  <p className="text-sm text-muted-foreground">API integration, authentication, and workflow orchestration</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">⚡ Performance Optimization</h3>
                  <p className="text-sm text-muted-foreground">Response time optimization, error handling, and scalability</p>
                </div>
              </div>
            </div>

            {/* Practical Applications */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">💼 Practical Applications</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Applied Skills certification has enabled me to confidently implement NLP solutions for client projects, from customer service chatbots to document processing automation. The hands-on approach ensures I can deliver working solutions that meet real business needs. 🚀
              </p>
            </div>

            {/* Recommended Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Free Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Microsoft Learn Modules</h3>
                  <p className="text-muted-foreground mb-4">
                    Focus on Azure AI services modules, particularly Text Analytics, Language Understanding, and Azure Bot Service documentation.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-us/azure/cognitive-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📖 Azure AI Services Documentation
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Study Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    Practice building actual NLP solutions using Azure free tier. The Applied Skills format requires hands-on experience, not just theoretical knowledge.
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-medium">
                      💡 Pro Tip: Build small NLP projects before attempting the assessment to gain confidence with the services!
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

export default NLPAppliedSkillsArticle;
