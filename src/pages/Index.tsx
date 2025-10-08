import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SeriesRail from "@/components/home/SeriesRail";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SeriesRail />
    </div>
  );
};

export default Index;
