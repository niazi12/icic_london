"use client";

import { Toaster } from "@/components/ui/sonner";
// import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    // <SessionProvider>
    <>
      <Toaster position="top-center" />
      {children}
    </>
    // </SessionProvider>
  );
};

export default Providers;
