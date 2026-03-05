import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import ForSchools from "./pages/ForSchools";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Manifesto from "./pages/Manifesto";
import Contact from "./pages/Contact";
import DerWeg from "./pages/DerWeg";
import NetworkPartners from "./pages/NetworkPartners";
import Booking from "./pages/Booking";
import Newsletter from "./pages/Newsletter";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schools" element={<ForSchools />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/about" element={<About />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/der-weg" element={<DerWeg />} />
            <Route path="/netzwerkpartner" element={<NetworkPartners />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
