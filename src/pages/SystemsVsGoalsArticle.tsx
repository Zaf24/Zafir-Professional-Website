import { motion } from "framer-motion";
import { ArrowLeft, Calendar, PenSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SystemsVsGoalsArticle = () => {
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
            <Link to="/writing-content">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Writing
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-border overflow-hidden">
                  <PenSquare className="w-10 h-10 text-purple-500" />
                </div>
              </div>
              
              {/* Article Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                    Essay
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Systems {'>'} Goals: Why it’s important to distinguish
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Published 2025</span>
                  </div>
                  <motion.a
                    href="https://www.linkedin.com/pulse/systems-goals-why-important-distinguish-mohamed-zafir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Original on LinkedIn</span>
                  </motion.a>
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
          className="max-w-3xl mx-auto"
        >
          <article className="prose prose-lg prose-invert max-w-none">
            {/* Body copied from LinkedIn article (author: Mohamed Zafir) */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                “Fake it. Till you make it”. This is probably a statement that most of us would have already heard. However not one that we would have attempted to unpack. Before I proceed to explain why I believe that analysing that statement is beneficial, let me first share on what is it that led me to even ponder on a phrase I have known for ages but not given much thought.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                I was reading a pretty well-known book that some of you might have guessed from the title of this blog itself. It is one written by James Clear. Titled Atomic Habits. I had this tickle of enlightenment pretty early into the book as the author discusses a fascinating concept of understanding the difference between setting goals and creating systems. He writes, “Goals are about the results you want to achieve. Systems are about the processes that lead you to the results.”
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                As I finished reading the paragraph, I already had about 7–8 goals that I set for myself and failed to achieve, giggling in my head: “How dumb LOL you could have actually done it if you focused on the right stuff”. Many a times, we tend to completely focus on the results that we desire when the only thing that actually matters is the process that we go through to achieve that result. If we want to win a basketball championship, we actually have to live like champions before we even get the championship.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The waking up an hour early to get a workout in before the first period. The staying after practice to get another 100 shots up and telling friends no to a party that might affect your diet is the lifestyle of a champion. However, most of us end up focusing on the goal of getting the championship medal that we tend to slip up on things that truly births a champion.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                As the self-deprecatory giggles subsided, the phrase I mentioned earlier on entered my thought bubble. If we try to unpack the statement, we will realize it’s basically telling us to focus on the system/lifestyle rather than the outcome. It advises us to live like a millionaire until we become a millionaire if that is what we desire.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                If we focus on the lifestyle and systems of an actual millionaire, we would discover that they follow scores of habits that are contrary to popular beliefs, such as not buying into flashy liabilities (depreciating assets like cars) and investing a large proportion of their income and only using a small percentage of it for expenses. On the contrary, if we choose to not focus on living like a millionaire even before becoming one, it is fairly easy to pick up habits that could be counterproductive to the desired results.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The advantage of “Faking it” till we make it, is that we would not do anything that someone who has already achieved our desired outcome wouldn’t do. The life we live will follow a system that will lead us to inevitable success.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                A building would only stand tall without collapsing if it is built with a proper and strong structure. We humans fortunately have the option to stand tall first, then carefully establish a strong structure to grow better and more successful. So remember to set a goal for yourself. And “Fake it.” Till you make it.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemsVsGoalsArticle;


