import type { Metadata } from "next";
import RootLayoutClient from "./root-layout-client"; // Import your Client Component

export const metadata: Metadata = {
  title: "Karma Film | Creative Content Agency",
  description: "We craft compelling visual narratives that captivate audiences and elevate brands.",
  icons: {
    icon: "/assets/yash-singh.png", // Path to your favicon inside the public folder
    shortcut: "/assets/yash-singh.png",
    apple: "/apple-touch-icon.png", // Optional for Apple devices
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
