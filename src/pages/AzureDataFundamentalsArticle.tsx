import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AzureDataFundamentalsArticle = () => {
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <img
                    src="./microsoft-certified-fundamentals.svg"
                    alt="Microsoft Azure Data Fundamentals"
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
                  Microsoft Azure Data Fundamentals
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  Building reliable AI starts with reliable data. This certification grounded my AI engineering journey in the essentials of how data is modeled, stored, processed, secured, and made useful for analytics and decision-making.
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>Completed 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                    <a 
                      href="https://learn.microsoft.com/api/credentials/share/en-sg/ZafirMohamed-8469/886987BFACED6EF?sharingId=B985D71B437E98FB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
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
                After diving deep into my AI engineering certification journey, I realised one key truth: good data is the foundation of good AI systems. To build AI solutions that truly deliver, you need to understand not just models and prompts—but how data is defined, stored, processed, and made meaningful. That’s why I decided to invest time in mastering Azure’s data stack. Stepping into this space felt ambitious—but worthwhile.
              </p>
            </div>

            {/* Certification Journey */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">🚀 My Certification Journey</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🔗 Connecting AI and Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This was the bridge between AI aspirations and production reality. I learned where different data systems fit—when to use relational databases, when to reach for NoSQL, how to architect for analytics, and what it takes to keep data secure and governed at scale.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🧱 Foundations for Analytics & AI</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I practiced core patterns like batch vs. streaming, ETL vs. ELT, data normalization vs. denormalization, and how choices around partitioning, indexing, and consistency affect performance, cost, and reliability across Azure services.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">🎯 Key Takeaways</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">📊 Data Modeling</h3>
                  <p className="text-sm text-muted-foreground">Relational vs. non-relational, normalization, denormalization, star schemas for analytics</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">⚡ Workloads</h3>
                  <p className="text-sm text-muted-foreground">Transactional (OLTP) vs. Analytical (OLAP); batch vs. streaming pipelines</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🧩 Processing Patterns</h3>
                  <p className="text-sm text-muted-foreground">ETL vs. ELT, data lakes and lakehouses, columnar formats like Parquet</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">🔐 Governance & Security</h3>
                  <p className="text-sm text-muted-foreground">RBAC, encryption at rest/in transit, lineage and cataloging with governance tools</p>
                </div>
              </div>
            </div>

            {/* Core Azure Services */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">🛠️ Core Azure Services I explored</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• Azure SQL Database for relational workloads and transactional systems</li>
                <li>• Azure Cosmos DB for globally distributed NoSQL with tunable consistency and partitioning</li>
                <li>• Azure Data Lake Storage Gen2 for lake/lakehouse architectures and large-scale analytics</li>
                <li>• Azure Synapse Analytics for data warehousing, SQL serverless, and integrated analytics</li>
                <li>• Azure Data Factory for orchestrating ETL/ELT pipelines</li>
                <li>• Azure Stream Analytics for real-time event processing</li>
                <li>• Microsoft Purview for data discovery, cataloging, and governance</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Recommended Resources</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">🎓 Microsoft Learn: DP-900</h3>
                  <p className="text-muted-foreground mb-4">
                    Practice assessments and sandbox experiences closely mirror the live exam. Focus on understanding when to use each Azure data service and how components integrate across ingestion, storage, processing, and analytics.
                  </p>
                  <a 
                    href="https://learn.microsoft.com/en-sg/credentials/certifications/azure-data-fundamentals/?practice-assessment-type=certification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    🔗 Microsoft Learn – Azure Data Fundamentals
                  </a>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">📋 Study Tip</h3>
                  <p className="text-muted-foreground">
                    Build a simple pipeline end-to-end: ingest sample data into ADLS, transform with Synapse or Data Factory, and visualize with your preferred BI tool. Seeing the full flow cements the concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  💬 Get in touch about data + AI
                </motion.button>
              </Link>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default AzureDataFundamentalsArticle;


