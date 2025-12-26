import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PipesTubes from "./pages/products/PipesTubes";
import PlatesSheets from "./pages/products/PlatesSheets";
import Fasteners from "./pages/products/Fasteners";
import PipeFlanges from "./pages/products/PipeFlanges";
import ChannelAngles from "./pages/products/ChannelAngles";
import RoundSquareBars from "./pages/products/RoundSquareBars";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/pipes-tubes" element={<PipesTubes />} />
          <Route path="/products/plates-sheets" element={<PlatesSheets />} />
          <Route path="/products/fasteners" element={<Fasteners />} />
          <Route path="/products/pipe-flanges" element={<PipeFlanges />} />
          <Route path="/products/channel-angles" element={<ChannelAngles />} />
          <Route path="/products/round-square-bars" element={<RoundSquareBars />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
