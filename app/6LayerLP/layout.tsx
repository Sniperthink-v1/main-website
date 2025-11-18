import type { Metadata } from 'next'
import './css/globals.css'

export const metadata: Metadata = {
  title: 'Business Intelligence Dashboard | SniperThink',
  description:
    "A powerful business intelligence dashboard that gives you clarity across sales, operations, performance, and decision-making. Built for founders, teams, and operators.",
}

export default function SixLayersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
