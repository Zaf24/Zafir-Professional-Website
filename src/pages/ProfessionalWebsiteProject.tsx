import { motion } from "framer-motion";
import { ArrowLeft, Code, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProfessionalWebsiteProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const repoUrl = "https://github.com/Zaf24/Zafir-Professional-Website.git";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/key-projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <img
                    src="./favicon.svg"
                    alt="Professional Website Project"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
              
              {/* Article Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                    Portfolio
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Professional Website Project
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                  A Netflix-inspired, personal website built from my own idea—crafted to present my journey, certifications, and projects with cinematic clarity. This project was my hands-on leap from a no‑code background into front‑end engineering.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-foreground text-background hover:opacity-90 px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Github repo
                  </a>
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
          <article className="prose prose-lg prose-invert max-w-none">
            {/* Story */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Why this project mattered to me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I wanted a personal site that didn’t just “list” achievements—it should feel like a journey you can watch. The Netflix-style rails, episode cards, and animated transitions give my story momentum, while keeping everything fast, responsive, and accessible.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This was a holiday project that I built on a road trip from Singapore to KL—equal parts passion, curiosity, and momentum.
              </p>
            </div>

            {/* Build Approach */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">How I built it</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Idea → Theme</h3>
                  <p className="text-sm text-muted-foreground">
                    Started with a clear creative direction: a Netflix-inspired UX to showcase certifications and projects like episodes in a series.
                  </p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Boilerplates</h3>
                  <p className="text-sm text-muted-foreground">
                    Used ChatGPT and Lovable to spin up boilerplates and UI scaffolds quickly—then customized deeply to match my vision.
                  </p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Daily Iteration</h3>
                  <p className="text-sm text-muted-foreground">
                    Built iteratively in Cursor—rapid refactors, componentization, accessibility tweaks, and performance passes.
                  </p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Simple CI/CD</h3>
                  <p className="text-sm text-muted-foreground">
                    Used GitHub Workflows for straightforward deployment—every push builds and ships a fresh version.
                  </p>
                </div>
                <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">AI + Fundamentals</h3>
                  <p className="text-sm text-muted-foreground">
                    This project taught me the power of leveraging AI tools alongside traditional coding—pairing assistants like ChatGPT and Lovable with fundamentals from my CS50 course to move faster while learning deeper.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech + Architecture */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">What’s under the hood</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• React + TypeScript with component-driven architecture</li>
                <li>• Tailwind CSS for rapid, consistent styling</li>
                <li>• Framer Motion for polished, responsive animations</li>
                <li>• Shadcn UI-inspired components for accessible building blocks</li>
                <li>• GitHub Actions to build and deploy automatically</li>
              </ul>
            </div>

            {/* Reflection */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">From no‑code to front‑end</h2>
              <p className="text-muted-foreground leading-relaxed">
                Coming from a business major and no‑code background, this project became a stepping stone into real front‑end engineering. I learned how design intent translates into components, how state and props drive behavior, and how thoughtful animations can elevate storytelling—without sacrificing performance. It’s the start of a longer journey, and I’m excited for what’s next.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalWebsiteProject;


