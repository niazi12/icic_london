"use client";

import { Toaster } from "@/components/ui/sonner";
// import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }) => {
  return (
    // <SessionProvider>

      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <Toaster position="top-center" />
        {children}
        </ThemeProvider>
    // </SessionProvider>
  );
};

export default Providers;
