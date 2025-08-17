import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SniperThink - Your Growth Partner',
  description: 'SniperThink turns your business data into growth systems. Get clarity, speed, and control to scale confidently.',
  generator: 'v0.dev',
  metadataBase: new URL('https://sniperthink.com'),
  openGraph: {
    title: 'SniperThink - Your Growth Partner',
    description: 'SniperThink turns your business data into growth systems. Get clarity, speed, and control to scale confidently.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SniperThink - Your Growth Partner',
    description: 'SniperThink turns your business data into growth systems. Get clarity, speed, and control to scale confidently.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://anima-uploads.s3.amazonaws.com" />
        
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&family=Sora:wght@400;600;700&display=swap" 
          as="style" 
        />
        <noscript>
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&family=Sora:wght@400;600;700&display=swap" 
            rel="stylesheet" 
          />
        </noscript>
        
        {/* Preload critical images */}
        <link rel="preload" href="/img/bg-texture.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/Gradient.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/logo.svg" as="image" type="image/svg+xml" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                    }
                  }, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#0F0F11] text-white">{children}</body>
    </html>
  )
}
