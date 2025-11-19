import type { Metadata } from "next";
import "./css/globals.css";

export const metadata: Metadata = {
  title: "Business Intelligence Dashboard – SniperThink",
  description:
    "6-Layer Business Intelligence Dashboard that gives clarity, insights, and real-time operations visibility.",
};

export default function SixLayersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
