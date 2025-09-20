import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Motors from "./pages/services/Motors";
import Transformers from "./pages/services/Transformers";
import ControlPanels from "./pages/services/ControlPanels";
import Generators from "./pages/services/Generators";
import Automation from "./pages/services/Automation";
import Maintenance from "./pages/services/Maintenance";

import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          <Route path="/services/motors" element={<Motors />} />
          <Route path="/services/transformers" element={<Transformers />} />
          <Route path="/services/control-panels" element={<ControlPanels />} />
          <Route path="/services/generators" element={<Generators />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/maintenance" element={<Maintenance />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
