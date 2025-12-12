import { motion } from "framer-motion";
import { ArrowLeft, Calendar, PenSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LookWithinArticle = () => {
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
                  Why it is most important to look within and how it will help you stay the course.
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Published September 2023</span>
                  </div>
                  <motion.a
                    href="https://www.linkedin.com/pulse/why-most-important-look-within-how-help-you-stay-course-mohamed-zafir/"
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
                Baltasar Gracian once said "Never lose your self- respect, nor be too familiar with yourself when you are alone. Let your integrity itself be your own standard of rectitude, and be more indebted to the severity of your own judgement of yourself than to all external precepts. Desist from unseemly conduct, rather out of respect for your own virtue than for the strictures of external authority. Come to hold yourself in awe. And you will have no need for Seneca's imaginary tutor"
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Think about when you felt the proudest in your life. What was the achievement or acknowledgment that made you feel like you're really someone that is capable of great things. Now, bring yourself back to that point in life, journey through the months or weeks that lead up to that moment. I would tell you as certainly as I can possibly be, that it was a roller coaster ride. There would have been moments where you felt like crap and moments where you already prophesied your achievement. However, I would like you to focus on the self-respect that you had during that period that lead up to the proudest moment in your life. I would now like to stop your self loathing train of thoughts and bring you back to the present.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Let me now intrigue you with another question. Why is it that the moment that you were most proud of yourself was not this very moment? This was the question that is asked myself after I unpacked the quote mentioned above. It was littered with so much wisdom that I spent a week pondering on it. It tells you to not be too familiar with yourself when you're alone because you should fear your judgement of your own conscience more than anything else. It tells you to desist from unseemly conduct because You just respect yourself too much to engage in anything that will affect your self image. And then, it also tells you to hold yourself in awe. So it is not just about fearing yourself or holding yourself to high standards. It is also about loving yourself unconditionally that you wish nothing but the best for yourself.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                As I decided to implement these ideas in life, I was fortunate enough to read the most influential book I have read so far, "The 5am club" by Robin Sharma. That book helped me discover how to gain that paramount amount of self- respect and discipline that Baltasar Gracian suggests we should cultivate. Sharma shares the "Creed of the willpower warrior" which are scientific truths behind excellent habits.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <ul className="text-muted-foreground leading-relaxed space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-semibold mt-1">•</span>
                  <span>World class willpower isn't an inborn strength, but a skill developed through relentless practice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-semibold mt-1">•</span>
                  <span>Personal discipline is a muscle. More you stretch it more it grows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-semibold mt-1">•</span>
                  <span>Like all muscles, willpower also weakens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-semibold mt-1">•</span>
                  <span>Increasing self control of one-area in your life elevates it in all areas of life</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                I chose to act on the fourth and final facts mentioned. I realised that being consistent with studying or my prayers was not easy. So I decided to Incorporate a strong routine in one aspect that I found easier. I promised that for 6 days a week I will work out for sure. It could be the gym or other fun activities like basketball or badminton. But a workout in the morning at the gym was compulsory for at least 3 of the 6 days. Following that self discipline slowly started to leak into other aspects of my life, to the extent that meeting deadlines and praying everyday was not as tough anymore.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Sharma also shares that following through on what is started determines the size of self respect that will be generated. So next time your feel like giving up on something that you have already started, remember it is not about anyone else you're letting down. It is your self respect and esteem that you're losing for yourself.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                I would like to end with the most impactful quote from the book. "To remain loyal to your noble ideal not only during the weeks you thought up the dream but over the long months and perhaps extended years in the parched desert of creative implementation while you endure rejection exhaustion, the stones of jealous peers, the skepticism of your loved ones, being diverted by other attractive opportunities and finding your way through the isolated winters of self doubt. This is what separates the also-rans from the icon. Anyone can be great for a minute. The sport of icons is sustaining genius grade performance over a lifetime"
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                So ask yourself, Why is it that the present is not the proudest moment of your life. What are you not doing to feel proud of yourself right now
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default LookWithinArticle;

