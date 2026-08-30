import { motion } from "framer-motion";
import { ArrowLeft, Mic2, Calendar, Target, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface SpeakingEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  badge: string;
}

const SpeakingEngagements = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const techTalks: SpeakingEvent[] = [
    {
      id: "agentcamp-singapore-2026",
      title: "AgentCamp Singapore 2026 - Hands-on Lab",
      description: "Facilitated a hands-on lab at AgentCamp Singapore 2026 organized by Global AI Community. Helped over 150 participants across banking, tech, public sector, and academia build real agentic AI solutions. The event prioritized doing over showing — participants weren't just listening, they were building.",
      date: "May 2026",
      venue: "Singapore",
      badge: "Tech Workshop",
    },
  ];

  const communityEvents: SpeakingEvent[] = [
    {
      id: "fsim-national-day-2026",
      title: "FSIM 61st National Day Observance Ceremony",
      description: "Delivered a National Day speech at Masjid Angullia as part of FSIM's 61st National Day Observance Ceremony. Theme: 'Singapore is for everyone — especially the youth.' Shared personal stories about growing up in Singapore, the legacy of Singapore's founding, and the nation's investment in its young people.",
      date: "August 2026",
      venue: "Masjid Angullia, Singapore",
      badge: "Keynote",
    },
    {
      id: "thaaragai-fathers-day-2026",
      title: "Thaaragai Muthamizh Society Father's Day Event",
      description: "Spoke on a topic close to my heart — the late Mr. Lee Kuan Yew — as part of Thaaragai Muthamizh Society's Father's Day celebration honoring the founding fathers of Singapore. Reflected on discovering his legacy as a young student and what it means to be a proud Singaporean today.",
      date: "July 2026",
      venue: "Singapore Tamil Society",
      badge: "Speech",
    },
  ];

  const totalEvents = techTalks.length + communityEvents.length;

  const EventCard = ({ event, icon }: { event: SpeakingEvent; icon: React.ReactNode }) => (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
              {event.badge}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {event.date}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{event.title}</h3>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{event.description}</p>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Venue:</span> {event.venue}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Series Header */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-border">
                  <Mic2 className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Speaking & Presentations</h1>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
                  Keynote talks, workshops, and community presentations across technology and cultural spaces.
                </p>
                
                {/* Series Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">{totalEvents} Event{totalEvents !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Events Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tech Talks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-12"
        >
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl sm:text-3xl font-bold">Tech Talks & Workshops</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Technical presentations, hands-on labs, and workshops focused on AI, cloud technologies, and software development.
          </p>

          <div className="space-y-4">
            {techTalks.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <EventCard 
                  event={event} 
                  icon={<Code className="w-8 h-8 text-blue-500" />} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tamil Language & Community Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl sm:text-3xl font-bold">Tamil Language & Community Events</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Speaking engagements celebrating Tamil heritage, Singapore's founding values, and community connection.
          </p>

          <div className="space-y-4">
            {communityEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              >
                <EventCard 
                  event={event} 
                  icon={<Users className="w-8 h-8 text-purple-500" />} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpeakingEngagements;
