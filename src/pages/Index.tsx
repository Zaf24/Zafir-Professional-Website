import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SeriesRail from "@/components/home/SeriesRail";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SeriesRail />
      
      {/* My Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-card to-accent/20 border border-border rounded-xl p-8 sm:p-12 max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg">
              <p>
                From the basketball court to the boardroom, from Tamil storytelling to cutting-edge AI development,
                my journey has been anything but conventional.
              </p>
              <p>
                At Microsoft, I've worked on transformative AI solutions while maintaining deep roots in my cultural heritage.
                I tutor mathematics and Tamil, bridging generational and cultural gaps through education.
              </p>
              <p>
                My entrepreneurial ventures—Cloudslize, ZAFragrance, and Guru—reflect my belief that technology should
                serve humanity, not replace it. Through speaking engagements and essays, I advocate for ethical innovation
                and cultural preservation in our rapidly digitizing world.
              </p>
              <p className="text-foreground font-semibold">
                This catalogue is my way of sharing these experiences with you—recruiter, collaborator, or curious mind.
                Welcome to my world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
