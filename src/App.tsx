import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceEducation from "./pages/ServiceEducation";
import ServiceImmigration from "./pages/ServiceImmigration";
import ServiceInvestment from "./pages/ServiceInvestment";
import ServiceConferences from "./pages/ServiceConferences";
import ServiceJobs from "./pages/ServiceJobs";
import ServiceIndustry from "./pages/ServiceIndustry";
import ServiceTrade from "./pages/ServiceTrade";
import ServiceTravel from "./pages/ServiceTravel";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Intake from "./pages/Intake";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/education" element={<ServiceEducation />} />
          <Route
            path="/services/immigration"
            element={<ServiceImmigration />}
          />
          <Route path="/services/investment" element={<ServiceInvestment />} />
          <Route
            path="/services/conferences"
            element={<ServiceConferences />}
          />
          <Route path="/services/jobs" element={<ServiceJobs />} />
          <Route path="/services/industry" element={<ServiceIndustry />} />
          <Route path="/services/trade" element={<ServiceTrade />} />
          <Route path="/services/travel" element={<ServiceTravel />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
