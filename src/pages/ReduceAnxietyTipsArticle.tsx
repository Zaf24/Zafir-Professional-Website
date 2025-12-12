import { motion } from "framer-motion";
import { ArrowLeft, Calendar, PenSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ReduceAnxietyTipsArticle = () => {
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
                  4 tips to reduce anxiety, slumps and build an impenetrable mental fortress
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Published March 2023</span>
                  </div>
                  <motion.a
                    href="https://www.linkedin.com/pulse/4-tips-reduce-anxiety-slumps-build-impenetrable-mental-mohamed-zafir/"
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
                Not one organism to have been cursed enough to be blessed with life on this planet is an exception to self-doubt. Great leaders that are celebrated as icons of courage and bravery such as Nelson Mandela the voice of the people against the apartheid, Raja Raja cholan the 10th century king of India or even Umar ibn al Khattab, the 52nd most influential leader in the world according to Micheal H. Hart's book; 100 most influential leaders in the history of the world, all had moments of self-doubt and anxiety as they strived to fulfil their ideologies. Of course not all of us would want to be a top 100 influential leader or arguably the greatest monarch of all time. But we would all appreciate some routine or tips that we can follow when the inevitable pressure of self-doubt hits us in an untimely manner wouldn't we? Here are 4 tips I find useful to battle the demons of anxiety and self-doubt.
              </p>
            </div>

            {/* Tip 1 */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-purple-400">1.</span>
                Practice solitary
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                There is huge difference between being alone and being lonely. It is important for you to be comfortable in the solitary of just you and your own thoughts to develop an impenetrable mental fortitude.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quiz yourself this, Who is the biggest influence in your life. Who's voice is constantly telling you something. Your answer should be: The voice that is currently reading this. I have personally seen a huge change in the way I operate after I started to consciously acknowledge the voice inside of me. The one that tells you in the morning to hit the snooze button, or when it is a little motivated after watching Mohamed Ali video the night before, tells you get the hell up though you have 2 more mins before your alarm goes off. Having a sound debate with the voice inside of you helps you be a more confident person that is in better control of their mental health. Because as you get more comfortable with your conscience, it will get easier to identify your genuine strength and weaknesses, your true fears. This will immensely increase the trust you have on yourself and the decisions you make. Other than having sound debates with yourself, you may also want to pick up a meditation routine or just start with a morning 5 minutes walk everyday with zero distractions. Just you and your inner voice go for a walk and get to know each other a little better.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-purple-400">2.</span>
                Define your enemy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you feel anxious or hesitant to go ahead and venture towards something new. Defining your enemy will help you realise if you should be afraid of the potential downside of action or the eternal cost of inaction. You will realise that the enemy is not some abstract form of "failure" it is being comfortable with the founding father of failure: Boredom. The realisation you gain from having a clear enemy will provide you with the a clear course of action towards the desired outcome. A man with a map walking into unknown territory will always be a way more confident man than the one walking in without a map. And trust me, defining your enemy, gives you a satellite GPS.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-purple-400">3.</span>
                Exercise
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This might be the most cliché tip in any video, podcast or article that shares about becoming a more confident person. But I truly believe this cannot be over-emphasised. Exercise does not only scientifically make you a generally happier and confident person through the generation of testosterones and release of dopamine. We are in the age of visual content. Most of our thinking is done when we consume a content through our optical prowess. Presentations are now encouraged to be made with graphs, videos and animation. We decide what is nice to eat from the Instagram stories others share and even government announcement or policy introduction are moving towards infographics from long newspaper article and speeches. This is because we simply prefer to see something that looks colourful and aesthetic before we even start our evaluation. You can now consider the effect it will have if you look in the mirror every morning and see the fittest/healthiest version of yourself. It will boost your self-esteem immensely. The toughest part of working out is being consistent with it. You don't have to look like Arnold or LeBron but, at least 90 mins of any form exercise ( Weights, skipping, running, swimming, high intensity sports) will transform you enough for you to feel proud and confident when you look into the mirror.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-purple-400">4.</span>
                Phrase your thinking to be more action driven
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whenever you are facing a slump it is easy to get trapped in a spiral or fall into the deadly hollows of self-pity. This is when you have to throw yourself a rope by asking: "What can I do to get things back on the upswing" If the answer to that is taking a few days to do some self-care, go to the beach and get a break to wind down and reset then so be it. But it is better for you to do absolutely nothing, knowing that you're taking a well deserved break and you'll be back within a time than to do absolutely nothing just feeling sorry for yourself. Always articulate the actions you wish to take clearly to yourself and ensure that your best friend, the inner voice is aware and on board. This allows you to be more focused on the 'how' rather than the 'what'. Having the clarity on what you want to do will gift you with the confidence to face any obstacle you face on the way.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default ReduceAnxietyTipsArticle;

