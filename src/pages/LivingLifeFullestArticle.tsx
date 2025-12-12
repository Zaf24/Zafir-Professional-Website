import { motion } from "framer-motion";
import { ArrowLeft, Calendar, PenSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LivingLifeFullestArticle = () => {
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
                  My thoughts on "Living life to its fullest". Trappings of defining what is "wholesome"
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Published 2025</span>
                  </div>
                  <motion.a
                    href="https://www.linkedin.com/pulse/my-thoughts-living-life-its-fullest-trappings-defining-mohamed-zafir/"
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
                "Life is so draining". "wish I could find love like that". "I just need to upgrade my circle and work on my goals." Were the kind of lines that were running through my head recently. But honestly why are we all so worked up over finding this distant idea of success, peace, happiness or love. I realised the importance I give to achieving a peaceful and purposeful life, ironically made my life much more draining and depressing.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                I'd like to start with a dialogue from a Tamil movie (I know I watch too much Tamil movies but this ones a good quote don't worry) that simplified all these thoughts running through my mind. "Take time to make the smaller decisions in your everyday life such as what you should wear and what you should eat, and life would make the bigger decisions such as who is your love and what is your calling"
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                That is when I realised the importance of, Living in the present.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Paul Coelho says in my favourite book of All-time; The alchemist: "I don't live in either my past or my future. I'm interested only in the present. If you can concentrate always on the present, you'll be a happy man. Life will be a party for you, a grand festival, because life is the moment we're living now."
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                It Is not possible for me to over emphasise this. Upon reflection, I found out that I was constantly planning on what I want to achieve in the future. How I want to spend my "successful life" with my close friends. I would then move on to the next big idea in my head and start fantasising on the big goals that I should achieve. Little do I think about the roller coaster ride I have ahead of me before making those fantasies into reality. This deprives me of the ability to enjoy the process or even stay disciplined in the process to really reach the end. After really thinking about it, I knew if I continue this way, all I would have is a life full of regretful fantasies and not legitimate peace. So, live in the moment, treasure the blessing of life you have now and choose one thing to focus on each aspect of your life and enjoy the process.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                What I mean by each aspect of life is to differentiate the different things that matter to you. You can choose a goal for your job or studies and one for your hobby and one for your physical/mental wellness.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                For example, you could set yourself a goal to either get a promotion or get a distinction for finals of the semester. And choose to get better at a hobby, be it a sport or art such as dancing or singing or just online gaming. And focus on nothing but just these 2 goals until you achieve them. By choosing to focus on one goal for the few things that matter to you, you can truly feel a purpose to get out of bed every morning.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Another very important factor I identified to live more in the present is to never leverage your peace or happiness on another person. No matter how close or dependable someone is to you, leveraging a path to happiness on another person is not only setting yourself up to potential disappointment but also putting unfair weight on the shoulders of someone that means a lot to you. Don't get me wrong, having a circle that inspires you, pick you up when you are down and basically provide you with a support system is extremely important. But it is much more important for you to realise that every person have the right to find their own purpose. Upon expecting someone else to share your passion or purpose is not only imposing your goals on someone else but also depriving one's opportunity to find their own calling.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                'Forever is composed of nows' always remember that living in the present allows you to make the most memories. When one day you realise your not in your teens anymore, you will probably find yourself realising your not in your twenties anymore just moments later. Thirties and forties will probably fly past the same way. By enjoying the 'nows' hopefully you will never feel like life flew past you before you could realise.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default LivingLifeFullestArticle;

