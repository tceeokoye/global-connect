"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "@/components/AppLayout";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        
        <link rel="icon" href="/logo22.png" />
        <title>Global Connect LLC</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Sonner />
          <AppLayout>
            <Navigation />
            {children}
            <Footer />
          </AppLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
