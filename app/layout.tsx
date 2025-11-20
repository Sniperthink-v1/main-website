import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SniperThink - AI-Driven Automation for Teams",
  description: "AI-Driven Automation for Teams",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  appleWebApp: {
    title: "SniperThink",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.sniperthink.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SniperThink",
    url: "https://www.sniperthink.com",
    logo: "https://www.sniperthink.com/img/logo.svg",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SniperThink",
    url: "https://www.sniperthink.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.sniperthink.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-73TLB4ZJQR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-73TLB4ZJQR');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>
        {children}
      </body>
    </html>
  );
}
