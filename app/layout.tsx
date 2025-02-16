import "./styles/globals.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout"; // Import the new client component

export const metadata: Metadata = {
  title: "Karma Films",
  description: "A creative studio crafting digital experiences",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout> {/* Use ClientLayout here */}
      </body>
    </html>
  );
}
