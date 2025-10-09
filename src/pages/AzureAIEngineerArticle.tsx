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
                    src="/microsoft-certified-associate.svg"
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
                    <span>Completed 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>3-4 hours</span>
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

            {/* Content Placeholder */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Certification Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Content will be added here detailing the certification journey, key learnings, and practical applications.
              </p>
              
              {/* Placeholder for future content */}
              <div className="bg-muted/50 border border-border rounded-lg p-6 text-center">
                <p className="text-muted-foreground italic">
                  Article content will be expanded with detailed insights, learnings, and experiences from the certification process.
                </p>
              </div>
            </div>

            {/* Skills Gained */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Skills Acquired</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Azure AI Services</h3>
                  <p className="text-sm text-muted-foreground">Cognitive Services, Bot Framework, and AI-powered applications</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">Azure ML, model training, and deployment pipelines</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">AI Integration</h3>
                  <p className="text-sm text-muted-foreground">API integration, data processing, and solution architecture</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Monitoring & Optimization</h3>
                  <p className="text-sm text-muted-foreground">Performance monitoring, cost optimization, and best practices</p>
                </div>
              </div>
            </div>

            {/* Practical Applications */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Practical Applications</h2>
              <p className="text-muted-foreground leading-relaxed">
                This certification has enabled the implementation of AI solutions across various projects, from intelligent chatbots to predictive analytics systems. The knowledge gained continues to drive innovation in AI-powered applications.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default AzureAIEngineerArticle;
