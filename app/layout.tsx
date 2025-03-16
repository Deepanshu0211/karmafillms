import type { Metadata } from "next";
import RootLayoutClient from "./root-layout-client"; // Import your Client Component

export const metadata: Metadata = {
  title: "Karma Film | Creative Content Agency",
  description: "We craft compelling visual narratives that captivate audiences and elevate brands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
