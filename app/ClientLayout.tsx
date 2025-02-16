"use client"; // ✅ This makes it a Client Component

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MouseFollower from "./components/MouseFollower";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000); // Show loader for 2 seconds
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className="h-screen flex justify-center items-center">
          <Loader /> {/* Show loader before rendering content */}
        </div>
      ) : (
        <>
          <Navbar />
          <MouseFollower />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
