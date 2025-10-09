import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import PeluciasPage from "./pages/PeluciasPage";
import EletronicosPage from "./pages/EletronicosPage";
import CapasCelularPage from "./pages/CapasCelularPage";
import CheckoutPage from "./pages/CheckoutPage";

// Cliente do React Query para gerenciar cache e estado de requisições
const queryClient = new QueryClient();

/**
 * Componente principal da aplicação
 * Configura provedores globais e sistema de roteamento
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Index />} />
          
          {/* Rota de detalhes do produto (recebe ID como parâmetro) */}
          <Route path="/produto/:id" element={<ProductDetails />} />
          
            {/*Rota de listagem dos produtos */}
            <Route path="/pelucias" element={<PeluciasPage />} />
            <Route path="/eletronicos" element={<EletronicosPage />} />
            <Route path="/capas" element={<CapasCelularPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          
            {/* Rota de checkout */}
          <Route path="/checkout" element={<CheckoutPage />} />
          
          {/* Rota catch-all para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
