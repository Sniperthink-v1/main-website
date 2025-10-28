import './css/globals.css'

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
