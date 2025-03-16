"use client"; // 👈 Make this a Client Component

import { Suspense, useState, useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";
import CustomCursor from "./components/custom-cursor";
import LoadingScreen from "./components/loading-screen";
import "./globals.css";

export default function RootLayoutClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-gilroy antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<LoadingScreen />}>
            {!isLoaded ? <LoadingScreen /> : (
              <>
                <CustomCursor />
                {children}
              </>
            )}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
