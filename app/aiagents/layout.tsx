import type { Metadata } from 'next'
import './css/globals.css'

export const metadata: Metadata = {
  title: 'AI Agent | SniperThink',
  description:
    'AI Agents that automate calls, chats, workflows, and decision-making. Boost speed, reduce workload, and scale your operations.',
}

export default function AIAgentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="dark bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {children}
    </div>
  )
}
