import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load admin components - only loaded when accessing admin routes
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminRoutes = lazy(() => import("./components/admin/AdminRoutes"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes - no auth overhead */}
            <Route path="/" element={<Index />} />
            
            {/* Admin routes - lazy loaded with auth */}
            <Route 
              path="/admin/login" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
                  <AdminLogin />
                </Suspense>
              } 
            />
            <Route 
              path="/admin/*" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
                  <AdminRoutes />
                </Suspense>
              } 
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
