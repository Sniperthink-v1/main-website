import type { Metadata } from "next";
import "./css/globals.css";

export const metadata: Metadata = {
  title: "AI Agent – Voice & Chat Automation | SniperThink",
  description:
    "AI calling and chat agents to automate conversations, qualify leads, and streamline workflows.",
};

export default function AIAgentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}
