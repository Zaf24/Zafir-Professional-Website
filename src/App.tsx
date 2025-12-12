import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfessionalCertifications from "./pages/ProfessionalCertifications";
import KeyProjects from "./pages/KeyProjects";
import ProfessionalWebsiteProject from "./pages/ProfessionalWebsiteProject";
import WritingContent from "./pages/WritingContent";
import AzureAIEngineerArticle from "./pages/AzureAIEngineerArticle";
import AzureFundamentalsArticle from "./pages/AzureFundamentalsArticle";
import AzureAIFundamentalsArticle from "./pages/AzureAIFundamentalsArticle";
import AzureDataFundamentalsArticle from "./pages/AzureDataFundamentalsArticle";
import PowerPlatformFundamentalsArticle from "./pages/PowerPlatformFundamentalsArticle";
import NLPAppliedSkillsArticle from "./pages/NLPAppliedSkillsArticle";
import PowerAppsAppliedSkillsArticle from "./pages/PowerAppsAppliedSkillsArticle";
import ThamizhumNaanumPodcast from "./pages/ThamizhumNaanumPodcast";
import NotFound from "./pages/NotFound";
import SystemsVsGoalsArticle from "./pages/SystemsVsGoalsArticle";
import LivingLifeFullestArticle from "./pages/LivingLifeFullestArticle";
import LookWithinArticle from "./pages/LookWithinArticle";
import ReduceAnxietyTipsArticle from "./pages/ReduceAnxietyTipsArticle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/professional-certifications" element={<ProfessionalCertifications />} />
          <Route path="/key-projects" element={<KeyProjects />} />
          <Route path="/professional-website" element={<ProfessionalWebsiteProject />} />
          <Route path="/writing-content" element={<WritingContent />} />
          <Route path="/azure-ai-engineer" element={<AzureAIEngineerArticle />} />
          <Route path="/azure-fundamentals" element={<AzureFundamentalsArticle />} />
          <Route path="/azure-ai-fundamentals" element={<AzureAIFundamentalsArticle />} />
          <Route path="/azure-data-fundamentals" element={<AzureDataFundamentalsArticle />} />
          <Route path="/power-platform-fundamentals" element={<PowerPlatformFundamentalsArticle />} />
          <Route path="/nlp-applied-skills" element={<NLPAppliedSkillsArticle />} />
          <Route path="/powerapps-applied-skills" element={<PowerAppsAppliedSkillsArticle />} />
          <Route path="/thamizhum-naanum-podcast" element={<ThamizhumNaanumPodcast />} />
          <Route path="/systems-vs-goals" element={<SystemsVsGoalsArticle />} />
          <Route path="/living-life-fullest" element={<LivingLifeFullestArticle />} />
          <Route path="/look-within" element={<LookWithinArticle />} />
          <Route path="/reduce-anxiety-tips" element={<ReduceAnxietyTipsArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
